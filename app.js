require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

const connectDB = require('./config/connectDB');
const userRoute = require('./routes/userRoute')


app.use(express.json());
app.use(express.urlencoded({ extened: true }));


app.use('/',userRoute)


const start = async () => {
await connectDB(process.env.MONGO_URI)
app.listen(PORT, ()=>{
    console.log(`server is running on post ${PORT} `)
})
}

start()
