import express from 'express'
import mongoose from 'mongoose'
import linkRoutes from './routes/links.js';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http';
import { Server } from 'socket.io';

dotenv.config()

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    }
  });

app.use(express.json())
app.use(cors())


app.use('/api/links', linkRoutes)
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)

mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
    console.log('MongoDB connected');
})

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    socket.on('userJoined', ({ firstName, lastName }) => {
      console.log(`${firstName} ${lastName} joined`);
      // broadcast to others
      socket.broadcast.emit('newUserJoined', { firstName, lastName });
    });

    socket.on('newComment', (data) => {
        socket.broadcast.emit('newComment', data);
      });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

// Server
const PORT = 3000
server.listen(PORT, () => {
    console.log('Server listening on port 3000');
});