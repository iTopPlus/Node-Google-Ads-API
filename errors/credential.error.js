class CredentialInputError extends Error {
    constructor(...params) {
        super(...params)
        if (Error.captureStackTrace) Error.captureStackTrace(this, CredentialInputError)
        this.name = 'Credential Input Error'
        this.date = new Date()
        this.message = ` 
        ╔═══════════════════════════════╗
        ║[Must Provide Credential]           
        ║   credential:                       
        ║       developerToken: String 
        ║       userAgent: String      
        ║       clientId: String       
        ║       clientSecret: String   
        ║       refreshToken: String   
        ╚═══════════════════════════════╝
        `
    }
}

module.exports = CredentialInputError
   