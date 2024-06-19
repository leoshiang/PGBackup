const TGMessenger = require('./TGMessenger')
const ConsoleMessenger = require('./ConsoleMessenger')

class MessageService {
    constructor () {
        this._messengers = []
    }

    _init (config) {
        this._messengers.push(new TGMessenger(config))
        this._messengers.push(new ConsoleMessenger(config))
    }

    sendMessage (message) {
        this._messengers.forEach(x => x.sendMessage(message))
    }

}

module.exports = new MessageService()