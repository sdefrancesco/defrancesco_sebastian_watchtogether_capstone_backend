import express from 'express'
import mongoose from 'mongoose'
import linkRoutes from './routes/links.js';
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cors())

app.use('/api/links', linkRoutes)



// Server
const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})