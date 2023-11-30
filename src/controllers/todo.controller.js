const { PrismaClient } = require('@prisma/client')
const { InternalServerError } = require('../server/server.error')
const { ResponseTemplate } = require('../helpers/resp.helper')

const prisma = new PrismaClient


async function CreateTodo(req, res) {

    const { title, description } = req.body

    const payload = {
        userId: req.users.id,
        title,
        description
    }

    try {

        const createTodo = await prisma.todos.create({
            data: {
                ...payload
            }, select: {
                title: true,
                completed: true,
                createdAt: true,
                updatedAt: true
            }

        })

        let response = ResponseTemplate(createTodo, 'success', null, 200)
        return res.status(200).json(response)

    } catch (error) {
        throw new InternalServerError(error.message)
    }

}

async function ListAllTodo(req, res) {

    const { title, completed } = req.query
    const payload = {}

    if (title) {
        payload.title = title
    }

    if (completed) {
        payload.completed = completed
    }

    try {
        const todoList = await prisma.todos.findMany({
            where: payload,
            select: {
                id: true,
                title: true,
            }
        })
        let response = ResponseTemplate(todoList, 'success', null, 200)
        return res.status(200).json(response)
    } catch (error) {
        throw new InternalServerError(error.message)
    }


}

async function ViewDetail(req, res) {

    const { id } = req.params

    try {

        const checkData = await prisma.todos.findUnique({
            where: { id }
        })

        if (!checkData) {
            return res.status(404).json({
                message: 'data not found',
                status: 404
            })
        }

        const viewDetail = await prisma.todos.findUnique({
            where: { id },
            select: {
                id: true,
                title: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        })

        let response = ResponseTemplate(viewDetail, 'success', null, 200)
        return res.status(200).json(response)

    } catch (error) {
        throw new InternalServerError(error.message)
    }

}

async function DeleteTodo(req, res) {

    const { id } = req.params

    try {

        const checkData = await prisma.todos.findUnique({
            where: { id }
        })

        if (checkData == null) {
            return res.status(404).json({
                message: 'invalid request',
                status: 400
            })
        }

        if (!checkData) {
            return res.status(404).json({
                message: 'data not found',
                status: 404
            })
        }



        await prisma.todos.delete({
            where: id
        })

    } catch (error) {
        throw new InternalServerError(error.message)
    }

}

async function UpdateTodo(req, res) {

    const { title, description, completed } = req.body
    const {id}=req.params

    const payload = {
        title,
        description,
        completed: true
    }

    try {

        const upadteTodo = await prisma.todos.update({
            where: {id, userId: req.users.id },
            data: { ...payload },
            select: {
                id: true,
                title: true,
                description: true,
                completed: true,
                updatedAt: true
            }
        })

        let response = ResponseTemplate(upadteTodo, 'success', null, 200)
        return res.status(200).json(response)
    } catch (error) {
        throw new InternalServerError(error.message)
    }

}

module.exports = {
    CreateTodo,
    DeleteTodo,
    UpdateTodo,
    ListAllTodo,
    ViewDetail
}


