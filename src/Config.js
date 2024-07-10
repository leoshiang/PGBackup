class Config {
    constructor () {
        /**
         *  備份之後要顯示的訊息
         * @type {string}
         * @private
         */
        this._afterBackupMessage = ''

        /**
         *  備份之後要執行的指令
         * @type {string}
         * @private
         */
        this._afterBackupScript = ''

        /**
         * 備份目錄
         * @type {string}
         * @private
         */
        this._backupDirectory = ''

        /**
         * 備份之前要顯示的訊息
         * @type {null}
         * @private
         */
        this._beforeBackupMessage = ''

        /**
         * 備份之前要執行的指令
         * @type {null}
         * @private
         */
        this._beforeBackupScript = ''

        /**
         * 每日備份的目錄
         * @type {null}
         * @private
         */
        this._dailyBackupDir = ''

        /**
         * 每日備份備份保留期間(天)
         * @type {number}
         * @private
         */
        this._dailyBackupRetentionPeriod = 3

        /**
         * 要備份的資料庫名稱列表
         * @type {string}
         * @private
         */
        this._dbBackupList = ''

        /**
         * 要排除的資料庫名稱列表
         * @type {string}
         * @private
         */
        this._dbExcludeList = ''

        /**
         * 資料庫主機
         * @type {string}
         * @private
         */
        this._dbHost = ''

        /**
         * 資料庫名稱
         * @type {string}
         * @private
         */
        this._dbName = ''

        /**
         * 資料庫使用者密碼
         * @type {string}
         * @private
         */
        this._dbPassword = ''

        /**
         * 資料庫通訊埠
         * @type {number}
         * @private
         */
        this._dbPort = 5432

        /**
         * 資料庫使用者名稱
         * @type {string}
         * @private
         */
        this._dbUserName = ''

        /**
         * 備份檔案是否要壓縮
         * @type {boolean}
         * @private
         */
        this._doCompress = true

        /**
         * 月備份在幾號執行
         * @type {number}
         * @private
         */
        this._monthlyBackupAt = 1

        /**
         * 月備份目錄
         * @type {null}
         * @private
         */
        this._monthlyBackupDir = ''

        /**
         * 每月備份備份保留期間(月)
         * @type {number}
         * @private
         */
        this._monthlyBackupRetentionPeriod = 3

        /**
         * 週備份在星期幾執行。1=星期一，2=星期二...
         * @type {number}
         * @private
         */
        this._weeklyBackupAt = 7

        /**
         * 週備份目錄
         * @type {string}
         * @private
         */
        this._weeklyBackupDir = ''

        /**
         * 週備份備份保留期間(週)
         * @type {number}
         * @private
         */
        this._weeklyBackupRetentionPeriod = 3

        this._telegramToken = ''
        this._telegramChatId = null
        this._successEmoji = '💚'
        this._errorEmoji = '💔'
    }

    get afterBackupMessage () {
        return this._afterBackupMessage
    }

    set afterBackupMessage (value) {
        this._afterBackupMessage = value
    }

    get afterBackupScript () {
        return this._afterBackupScript
    }

    set afterBackupScript (value) {
        this._afterBackupScript = value
    }

    get backupDirectory () {
        return this._backupDirectory
    }

    set backupDirectory (value) {
        this._backupDirectory = value
    }

    get beforeBackupMessage () {
        return this._beforeBackupMessage
    }

    set beforeBackupMessage (value) {
        this._beforeBackupMessage = value
    }

    get beforeBackupScript () {
        return this._beforeBackupScript
    }

    set beforeBackupScript (value) {
        this._beforeBackupScript = value
    }

    get compressOutputFile () {
        return this._doCompress
    }

    set compressOutputFile (value) {
        this._doCompress = value
    }

    get dailyBackupDir () {
        return this._dailyBackupDir
    }

    set dailyBackupDir (value) {
        this._dailyBackupDir = value
    }

    get dailyBackupRetentionPeriod () {
        return this._dailyBackupRetentionPeriod
    }

    set dailyBackupRetentionPeriod (value) {
        this._dailyBackupRetentionPeriod = value
    }

    get dbBackupList () {
        return this._dbBackupList
    }

    set dbBackupList (value) {
        this._dbBackupList = value
    }

    get dbExcludeList () {
        return this._dbExcludeList
    }

    set dbExcludeList (value) {
        this._dbExcludeList = value
    }

    get dbHost () {
        return this._dbHost
    }

    set dbHost (value) {
        this._dbHost = value
    }

    get dbName () {
        return this._dbName
    }

    set dbName (value) {
        this._dbName = value
    }

    get dbPassword () {
        return this._dbPassword
    }

    set dbPassword (value) {
        this._dbPassword = value
    }

    get dbPort () {
        return this._dbPort
    }

    set dbPort (value) {
        this._dbPort = value
    }

    get dbUserName () {
        return this._dbUserName
    }

    set dbUserName (value) {
        this._dbUserName = value
    }

    get errorEmoji () {
        return this._errorEmoji
    }

    set errorEmoji (newValue) {
        this._errorEmoji = newValue
    }

    get monthlyBackupAt () {
        return this._monthlyBackupAt
    }

    set monthlyBackupAt (value) {
        this._monthlyBackupAt = value
    }

    get monthlyBackupDir () {
        return this._monthlyBackupDir
    }

    set monthlyBackupDir (value) {
        this._monthlyBackupDir = value
    }

    get monthlyBackupRetentionPeriod () {
        return this._monthlyBackupRetentionPeriod
    }

    set monthlyBackupRetentionPeriod (value) {
        this._monthlyBackupRetentionPeriod = value
    }

    get successEmoji () {
        return this._successEmoji
    }

    set successEmoji (newValue) {
        this._successEmoji = newValue
    }

    get telegramChatId () {
        return this._telegramChatId
    }

    set telegramChatId (value) {
        this._telegramChatId = value
    }

    get telegramToken () {
        return this._telegramToken
    }

    set telegramToken (value) {
        this._telegramToken = value
    }

    get weeklyBackupAt () {
        return this._weeklyBackupAt
    }

    set weeklyBackupAt (value) {
        this._weeklyBackupAt = value
    }

    get weeklyBackupDir () {
        return this._weeklyBackupDir
    }

    set weeklyBackupDir (value) {
        this._weeklyBackupDir = value
    }

    get weeklyBackupRetentionPeriod () {
        return this._weeklyBackupRetentionPeriod
    }

    set weeklyBackupRetentionPeriod (value) {
        this._weeklyBackupRetentionPeriod = value
    }
}

module.exports = Config