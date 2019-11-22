class Config {
    constructor() {
        this.accessToken = null
        this.credential = null
    }
}

Config.instance = null
Config.getInstance = () => {
    if (Config.instance === null) {
        Config.instance = new Config()
    }
    return Config.instance
}
module.exports = Config.getInstance()
 