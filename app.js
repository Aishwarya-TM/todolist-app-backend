require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const mongoose = require('mongoose')
const todoList = require('./routes/userRoutes')
const cors = require('cors')

app.get('/',(request,response)=>
    {
        response.status(200).send({message:'hello World'})
    })
    app.use(cors())
    app.use(express.json())
    
    app.use('/api/v1/todo',todoList)
    mongoose.connect(process.env.DB_URL)
    const db=mongoose.connection
    db.on('error',(errorMessage)=> console.log(errorMessage))
    db.once('open', ()=> console.log("Connectd to db successfully!"))

app.listen(PORT,()=>
{
    console.log(`server is running at http://localhost:${PORT}`)
})