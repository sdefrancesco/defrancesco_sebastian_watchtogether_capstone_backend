import express from 'express'
import mongoose from 'mongoose'
import linkRoutes from './routes/links.js';
import userRoutes from './routes/users.js';
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';

dotenv.config()

const app = express()



app.use(express.json())
app.use(cors())


app.use('/api/links', linkRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
    console.log('MongoDB connected');
})

// Server
const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})