const { execSync } = require('child_process')
const Messenger = require('./Messenger')

class TGMessenger extends Messenger {

    constructor (config) {
        super()
        this._isValid = this.existenceCheck()
        this._config = config
    }

    existenceCheck () {
        try {
            const output = execSync('TGMsg -V').toString() || ''
            return output.indexOf('TGMsg') === 0
        } catch (error) {
            return false
        }
    }

    sendMessage (message) {
        if (!this._isValid) return
        try {
            const command = `TGMsg -c ${this._config.telegramChatId} -t ${this._config.telegramToken} -m "${message}"`
            execSync(command)
        } catch (error) {

        }
    }

}

module.exports = TGMessenger