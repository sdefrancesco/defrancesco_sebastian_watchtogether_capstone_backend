import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    console.log('accessing api')
    res.status(200).json({msg: 'API'})
})



// Server
const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})