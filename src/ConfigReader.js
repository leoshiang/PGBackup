const { readFileSync } = require('fs')
const { parse } = require('ini')
const Config = require('./Config')
const path = require('path')
const { strToInt } = require('./Utils')

class ConfigReader {
    readFromFile (filePath) {
        let text = readFileSync(filePath, { encoding: 'utf-8' })
        const config = parse(text)
        const result = new Config()
        const backupDir = path.normalize(config.Backup.BACKUP_DIR || '')
        result.afterBackupMessage = config.Messaging.AFTER_BACKUP_MESSAGE
        result.afterBackupScript = config.Script.AFTER_BACKUP_SCRIPT
        result.backupDirectory = path.join(path.dirname(backupDir), path.basename(backupDir))
        result.beforeBackupMessage = config.Messaging.BEFORE_BACKUP_MESSAGE
        result.beforeBackupScript = config.Script.BEFORE_BACKUP_SCRIPT
        result.compressOutputFile = (config.Backup.COMPRESS_OUTPUT_FILE || '').toLowerCase() === 'yes'

        result.dbBackupList = config.Backup.DB_BACKUP_LIST
        result.dbExcludeList = config.Backup.DB_EXCLUDE_LIST
        result.dbHost = config.Database.DB_HOST
        result.dbName = config.Database.DB_NAME
        result.dbPassword = config.Database.DB_PASSWORD
        result.dbPort = config.Database.DB_PORT
        result.dbUserName = config.Database.DB_USERNAME

        result.dailyBackupDir = path.join(result.backupDirectory, 'daily')
        result.dailyBackupRetentionPeriod = parseInt(config.Backup.DAILY_BACKUP_RETENTION_PERIOD || '0')

        result.weeklyBackupAt = strToInt(config.Backup.WEEKLY_BACKUP_AT)
        result.weeklyBackupDir = path.join(result.backupDirectory, 'weekly')
        result.weeklyBackupRetentionPeriod = strToInt(config.Backup.WEEKLY_BACKUP_RETENTION_PERIOD)

        result.monthlyBackupAt = strToInt(config.Backup.MONTHLY_BACKUP_AT)
        result.monthlyBackupDir = path.join(result.backupDirectory, 'monthly')
        result.monthlyBackupRetentionPeriod = strToInt(config.Backup.MONTHLY_BACKUP_RETENTION_PERIOD)

        result.telegramToken = config.Messaging.TG_TOKEN
        result.telegramChatId = config.Messaging.TG_CHAT_ID
        result.successEmoji = config.Messaging.SUCCESS_EMOJI || '💚'
        result.errorEmoji = config.Messaging.ERROR_EMOJI || '💔'
        return result
    }
}

module.exports = ConfigReader