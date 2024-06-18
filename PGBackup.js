#!/usr/bin/env node

require('dotenv').config()
const ConfigBuilder = require('./src/ConfigBuilder')
const DailyBackupAction = require('./src/DailybackupAction');

(async () => {
    const config = ConfigBuilder.build()
    const dailyBackup = new DailyBackupAction(config)
    await dailyBackup.execute()
})()
