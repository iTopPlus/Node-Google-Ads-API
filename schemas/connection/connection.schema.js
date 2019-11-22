const Joi = require('@hapi/joi')

const schema = Joi.object().required()

function connectionResponse(data) {
    const v = schema.validate(data, { stripUnknown: false })
    if (v.error) {
        throw new Error(v.error.message)
    }
    return v.value
}

module.exports = {
    connectionResponse
}
