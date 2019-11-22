const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    accesstoken: Joi.string().required(),
    cid: Joi.string().required(),
    fields: Joi.array().required(),
    filter: Joi.array(),
    legacy:Joi.bool().default(false)

})

function validateReportInput(data) {
    const validate = schema.validate(data, { stripUnknown: true })
    if (validate.error) {
        throw new Error(validate.error.message)
    } else {
        return validate.value
    }
}

module.exports = {
    validateReportInput
}
