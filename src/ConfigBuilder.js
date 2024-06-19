const Config = require('./Config')
const path = require('path')
const { strToInt } = require('./Utils')

class ConfigBuilder {
    /**
     *
     * @returns {Config}
     */
    build () {
        const config = new Config()
        const backupDir = path.normalize(process.env['BACKUP_DIR'] || '')
        config.afterBackupScript = process.env['AFTER_BACKUP_SCRIPT']
        config.backupDirectory = path.join(path.dirname(backupDir), path.basename(backupDir))
        config.beforeBackupScript = process.env['BEFORE_BACKUP_SCRIPT']
        config.compressOutputFile = (process.env['COMPRESS_OUTPUT_FILE'] || '').toLowerCase() === 'yes'
        config.dailyBackupDir = path.join(config.backupDirectory, 'daily')
        config.dailyBackupRetentionPeriod = parseInt(process.env['DAILY_BACKUP_RETENTION_PERIOD'] || '0')
        config.dbBackupList = process.env['DB_BACKUP_LIST'] || ''
        config.dbExcludeList = process.env['DB_EXCLUDE_LIST'] || ''
        config.dbHost = process.env['DB_HOST'] || ''
        config.dbName = process.env['DB_NAME'] || ''
        config.dbPassword = process.env['DB_PASSWORD'] || ''
        config.dbPort = process.env['DB_PORT'] || '5432'
        config.dbUserName = process.env['DB_USERNAME'] || ''
        config.monthlyBackupAt = strToInt(process.env['MONTHLY_BACKUP_AT'])
        config.monthlyBackupDir = path.join(config.backupDirectory, 'monthly')
        config.monthlyBackupRetentionPeriod = strToInt(process.env['MONTHLY_BACKUP_RETENTION_PERIOD'])
        config.weeklyBackupAt = strToInt(process.env['WEEKLY_BACKUP_AT'])
        config.weeklyBackupDir = path.join(config.backupDirectory, 'weekly')
        config.weeklyBackupRetentionPeriod = strToInt(process.env['WEEKLY_BACKUP_RETENTION_PERIOD'])
        return config
    }
}

module.exports = new ConfigBuilder()