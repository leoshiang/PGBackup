const path = require('path')
const moment = require('moment')
const BackupAction = require('./BackupAction')

/**
 * 每日備份
 * @class
 */
class WeeklyBackupAction extends BackupAction {
    constructor (iConfig) {
        super(iConfig)
    }

    /**
     * 取得備份目錄。
     * @private
     * @return {string}
     */
    _getBackupDirectory () {
        return this._config.weeklyBackupDir
    }

    /**
     * 取得輸出檔案名稱。
     * @param {string} dbName 資料庫名稱。
     * @protected
     * @returns {string}
     */
    _getOutputFileName (dbName) {
        const weekNumber = moment().isoWeek()
        return this._config.weeklyBackupDir + path.sep
            + `week-${weekNumber}-`
            + dbName
            + (this._config.compressOutputFile ? '.gz' : '.sql')
    }

    /**
     * 取得備份檔案保留起始日期
     * @private
     * @return {moment.Moment}
     */
    _getRetentionStartDate () {
        const today = new moment()
        const retentionPeriod = this._config.weeklyBackupRetentionPeriod
        return today.subtract(retentionPeriod, 'weeks')
    }

    /**
     * 檔案是否為舊的?
     * @param {string} fileName 檔案名稱。
     * @param {moment.Moment} retentionStartDate 備份保留起始日期。
     * @protected
     * @return {boolean}
     */
    _isOldBackupFile (fileName, retentionStartDate) {
        const regex = new RegExp('^week-(\\d+)-.*')
        const match = regex.exec(fileName)
        if (!match) return false
        const backupWeekNumber = match[1].toString()
        const retentionStartWeek = retentionStartDate.week()
        return backupWeekNumber <= retentionStartWeek
    }
}

module.exports = WeeklyBackupAction