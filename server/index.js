import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './database/db.js';
// import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();
const port=process.env.PORT || 5000;
app.use(express.json())
app.use(cors());

// const DB = 'mongodb+srv://bagarwal:bhawnabbps@cluster0.3psxm.mongodb.net/ELearning?retryWrites=true&w=majority&appName=Cluster0'
// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log('connection successful');
// }).catch((err)=>console.log('no connection'));
// mongoose.connect("mongodb://localhost:27017/Transcribble").then(()=>{console.log("Connected to MongoDB")}).catch(()=>{console.log("Error connecting to MongoDB")})

app.get("/",(req,res)=>{
    res.send("server is running");
});

app.use("/uploads", express.static("uploads"));

//importing routes
import userRoutes from './routes/user.js'
import courseRoutes from './routes/course.js'
import adminRoutes from "./routes/admin.js";

//using routes
app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', adminRoutes);

app.listen(port,()=>{
    console.log("server is running");
    connectDb();
});

