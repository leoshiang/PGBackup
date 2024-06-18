const { execSync } = require('child_process')
const { stopExecution } = require('./Utils')

class PGDump {

    constructor () {
        this.existenceCheck()
    }

    /**
     *
     * @param {Config} config
     * @returns {string}
     * @private
     */
    _getCompressionOption (config) {
        return config.compressOutputFile ? ' --format=custom --compress=9 ' : ''
    }

    /**
     * 確認 PG_DUMP 可以執行。如果無法執行 PG_DUMP，就停止。
     */
    existenceCheck () {
        //ubuntu: pg_dump (PostgreSQL) 16.3 (Ubuntu 16.3-1.pgdg20.04+1)
        //windows: pg_dump (PostgreSQL) 16.2
        try {
            const output = execSync('pg_dump --version').toString() || ''
            if (output.indexOf('pg_dump (PostgreSQL)') === -1) {
                stopExecution('無法執行 pg_dump，請確認 PATH 有包含 pg_dump 的所在位置!')
            }
        } catch (error) {
            stopExecution('無法執行 pg_dump!' + error)
        }
        console.log('pg_dump 存在且可以執行...')
    }

    /**
     *
     * @param {Config} config
     * @param {string} dbName
     * @param {string} outputFileName
     */
    export (config, dbName, outputFileName) {
        const command = 'pg_dump --dbname=postgresql://'
            + `${config.dbUserName}:${config.dbPassword}`
            + `@${config.dbHost}:${config.dbPort}/${encodeURI(dbName)}`
            + ` -f ${outputFileName}`
            + this._getCompressionOption(config)
        try {
            execSync(command).toString()
        } catch (error) {
            console.error(`備份 ${dbName} 時發生錯誤：${error}`)
        }

    }
}

module.exports = new PGDump()