const { ResponseTemplate } = require('../helpers/resp.helper')
const Joi = require('joi')

function CheckRegister(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().max(255).required(),
        username: Joi.string().max(18).pattern(new RegExp('^[a-z]+')).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()]{8,30}$')).required(),
    })

    const { error } = schema.validate(req.body)

    if (error) {
        let response = ResponseTemplate(null, 'invalid request', error.details[0].message, 400)
        return res.status(400).json(response)
    }
    next()
}

function CheckTodolist(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().max(110).required(),
        description: Joi.string().max(255).allow(' '),
    })

    const { error } = schema.validate(req.body)

    if (error) {
        let response = ResponseTemplate(null, 'invalid request', error.details[0].message, 400)
        return res.status(400).json(response)
    }
    next()
}


module.exports = {
    CheckRegister,
    CheckTodolist
}