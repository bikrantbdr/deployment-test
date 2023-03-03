const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieparser = require('cookie-parser')

const hotelRouter = require('./routers/hotel')
const authRouter = require('./routers/auth')
const roomRouter = require('./routers/room')

const app = express()
dotenv.config()

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))

app.use(cookieparser())
app.use(express.json())

app.use('/api/rooms', roomRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    err.status = err.status || 500
    err.message = err.message || 'Internal Server Error'
    res.status(err.status).json({
        success: false,
        message: err.message,
        stack: err.stack
    })
})

app.listen(8800, () => {
    console.log(`Server is running on port 8800`);
})