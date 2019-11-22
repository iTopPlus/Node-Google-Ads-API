const Joi = require('@hapi/joi')

const schema = Joi.string().required()

function validateGenerateAccessTokenResponse(data) {
    const v = schema.validate(data, { stripUnknown: false })
    if (v.error) {
        throw new Error(v.error.message)
    }
    return v.value
}

module.exports = {
    validateGenerateAccessTokenResponse
}
