const { errorHandler } = require('./error.controller')

const AuthHandler = ({ validator, handler }) => {
    return async (params, version) => {
        try {
            const response = await handler(params, version)
            return validator(response)
        } catch (err) {
            errorHandler(err)
        }
    }
}

const ReportHandler = ({ validator, handler }) => {
    return async (cid, fields, filters, isLegacy, accessToken) => {
        try {
            const response = await handler(cid, fields, filters, isLegacy, accessToken)
            return validator(response)
        } catch (err) {
            errorHandler(err)
        }
    }
}

module.exports = { AuthHandler, ReportHandler }