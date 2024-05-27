const todoModel = require('../models/userModels');

const getAllTodo = async(request,response)=>
    {
        try
        {
            const todo = await todoModel.find()
            response.json(todo)
        }
        catch(error)
        {
            response.status(500).json({message:error.message})
        }
    }

const addTodo = async(request,response)=>
    {
        const todo = new todoModel({
            text:request.body.text
        })
        try
        {
            const newTodo = await todo.save()
            response.status(201).json(newTodo)
        }
        catch(error)
        {
            response.status(400).json({message:error.message})
        }
    }

const deleteTodo = async(request,respone)=>
    {
        try
        {
            await todoModel.findByIdAndRemove(request.params.id);
            respone.json({ message: 'Todo deleted' });
        }
        catch (error)
        {
            res.status(500).json({ message: error.message });
        }
        
    }

    module.exports = {getAllTodo,addTodo,deleteTodo}