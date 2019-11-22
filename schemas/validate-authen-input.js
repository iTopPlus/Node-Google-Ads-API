const Joi = require('@hapi/joi')
const CredentialInputError = require('../errors/credential.error')

const schema = Joi.object().keys({
    credential: Joi.object().keys({
        developerToken: Joi.string().required(),
        userAgent: Joi.string().required(),
        clientId: Joi.string().required(),
        clientSecret: Joi.string().required(),
        refreshToken: Joi.string().required(),
    }).required(),
    version: Joi.string().default('v4')
})

function validateInput(data) {
    const validate = schema.validate(data, { stripUnknown: true })
    if (validate.error) {
        throw new CredentialInputError(validate.error.message)
    } else {
        return validate.value
    }
}

module.exports = {
    validateInput
}
