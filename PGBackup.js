require('dotenv').config()
const ConfigBuilder = require('./src/ConfigBuilder')
const DailyBackupAction = require('./src/DailyBackupAction')
const WeeklyBackupAction = require('./src/WeeklyBackupAction')
const MonthlyBackupAction = require('./src/MonthlyBackupAction')
const moment = require('moment');
const MessageService = require('./src/MessageService/MessageService')
const child_process = require('node:child_process');

(async () => {
    const config = ConfigBuilder.build()
    MessageService._init(config)
    try
    {
        if (config.beforeBackupScript) {
            child_process.execSync(config.beforeBackupScript)
        }
        MessageService.sendMessage(config.beforeBackupMessage)
        await doDailyBackup(config)
        await doWeeklyBackup(config)
        await doMonthlyBackup(config)
    }
    finally {
        if (config.afterBackupScript) {
            child_process.execSync(config.afterBackupScript)
        }
        MessageService.sendMessage(config.afterBackupMessage)
    }
})()

async function doDailyBackup (config) {
    MessageService.sendMessage('執行每日備份...')
    await new DailyBackupAction(config).execute()
}

async function doWeeklyBackup (config) {
    const dayOfWeek = moment().isoWeekday()
    if (dayOfWeek !== config.weeklyBackupAt) return
    MessageService.sendMessage('執行每週備份...')
    await new WeeklyBackupAction(config).execute()
}

async function doMonthlyBackup (config) {
    const dateOfMonth = moment().date()
    if (dateOfMonth !== config.monthlyBackupAt) return
    MessageService.sendMessage('執行每月備份...')
    await new MonthlyBackupAction(config).execute()
}