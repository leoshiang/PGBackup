#!/usr/bin/env node

require('dotenv').config()
const ConfigBuilder = require('./src/ConfigBuilder')
const DailyBackupAction = require('./src/DailybackupAction');

(async () => {
    console.log('讀取設定檔...')
    const config = ConfigBuilder.build()
    console.log('執行每日備份...')
    const dailyBackup = new DailyBackupAction(config)
    await dailyBackup.execute()
    console.log('收工!')
})()
