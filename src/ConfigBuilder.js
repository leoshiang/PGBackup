const Config = require('./Config')
const path = require('path')

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
        config.monthlyBackupAt = parseInt(process.env['MONTHLY_BACKUP_AT'] || '1')
        config.monthlyBackupDir = path.join(config.backupDirectory, 'monthly')
        config.monthlyBackupRetentionPeriod = parseInt(process.env['MONTHLY_BACKUP_RETENTION_PERIOD'] || '0')
        config.weeklyBackupAt = parseInt(process.env['WEEKLY_BACKUP_AT'] || '1')
        config.weeklyBackupDir = path.join(config.backupDirectory, 'weekly')
        config.weeklyBackupRetentionPeriod = parseInt(process.env['WEEKLY_BACKUP_RETENTION_PERIOD'] || '0')
        return config
    }

}

module.exports = new ConfigBuilder()