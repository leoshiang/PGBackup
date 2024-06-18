const child_process = require('node:child_process')
const { Client } = require('pg')
const fs = require('fs')
const Utils = require('./Utils')
const PGDump = require('./PGDump')

class BackupAction {

    /**
     *
     * @param {Config} config
     */
    constructor (config) {
        /**
         * 備份設定
         * @type {Config}
         * @private
         */
        this._config = config

        /**
         * 要備份的資料庫名稱列表。
         * @type {null|string[]}
         * @private
         */
        this._ListOfDbToBackup = null
    }

    /**
     * 執行備份之後的指令。
     */
    _afterExecute () {
        if (!this._config.afterBackupScript) return
        child_process.execSync(this._config.afterBackupScript)
    }

    /**
     * 執行備份前的指令。
     */
    _beforeExecute () {
        if (!this._config.beforeBackupScript) return
        child_process.execSync(this._config.beforeBackupScript)
    }

    _createClient () {
        return new Client({
            user: this._config.dbUserName,
            host: this._config.dbHost,
            database: this._config.dbName,
            password: this._config.dbPassword,
            port: this._config.dbPort,
        })
    }

    _doRotation () {

    }

    _doBackup () {
        this._ensureDirectory()
        for (let i = 0; i < this._ListOfDbToBackup.length; i++) {
            const dbName = this._ListOfDbToBackup[i]
            const outputFileName = this._getOutputFileName(dbName)
            console.log(`正在備份資料庫 ${dbName}...`)
            PGDump.export(this._config, dbName, outputFileName)
            console.log(`資料庫 ${dbName} 已備份到 ${outputFileName}。`)
        }
    }

    _getBackupDirectory () {
        throw new Error('Method not implemented.')
    }

    /**
     * 確保備份目錄存在，不存在就建立。
     */
    _ensureDirectory () {
        const backupDirectory = this._getBackupDirectory()
        try {
            if (!fs.existsSync(backupDirectory)) {
                console.log(`目錄 ${backupDirectory} 不存在，嘗試建立...`)
                fs.mkdirSync(backupDirectory)
                console.log(`已建立目錄 ${backupDirectory}。`)
            }
        } catch (err) {
            Utils.stopExecution(`建立 ${backupDirectory} 時發生錯誤：${err}`)
        }
    }

    /**
     * 取得輸出檔案名稱
     * @param {string} dbName 資料庫名稱
     * @returns {string}
     * @private
     */
    _getOutputFileName (dbName) {
        throw new Error('Method not implemented.')
    }

    async _getDbNameList () {
        let dbNameList
        const client = this._createClient()
        try {
            client.connect()
            const result = await client.query('SELECT datname FROM pg_database WHERE datistemplate = false;')
            dbNameList = result.rows.map(x => x.datname)
            client.end()
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
        return dbNameList
    }

    /**
     * 執行備份
     * @returns {Promise<void>}
     */
    async execute () {
        try {
            this._beforeExecute()
            await this._getListOfDbNameToBackup()
            this._doBackup()
            this._doRotation()
        } finally {
            this._afterExecute()
        }
    }

    /**
     * 建立資料庫備份清單
     * @returns {Promise<void>}
     */
    async _getListOfDbNameToBackup () {
        if (this._config.dbBackupList === '') {
            this._ListOfDbToBackup = await this._getDbNameList()
        } else {
            this._ListOfDbToBackup = this._config.dbBackupList.split(',')
                .map(x => x.trim())
                .filter(x => x !== '')
        }
    }
}

module.exports = BackupAction