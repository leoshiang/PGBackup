const path = require('path')
const moment = require('moment')
const BackupAction = require('./BackupAction')

class DailyBackupAction extends BackupAction {
    constructor (iConfig) {
        super(iConfig)
    }

    /**
     * 取得輸出檔案名稱
     * @param {string} dbName 資料庫名稱
     * @returns {string}
     * @private
     */
    _getOutputFileName (dbName) {
        return this._config.dailyBackupDir + path.sep
            + moment().format('YYYYMMDD') + '-'
            + dbName
            + (this._config.compressOutputFile ? '.gz' : '.sql')
    }

    _getBackupDirectory () {
        return this._config.dailyBackupDir
    }
}

module.exports = DailyBackupAction