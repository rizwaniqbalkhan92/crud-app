import express from 'express'
import mongoose from 'mongoose'
import route from './routes/route.js'

const app=express()
const PORT=8000


app.use('/user',route)
const URL=`mongodb+srv://iqbal:labqi@cluster0.w4cjn.mongodb.net/PROMAMU?retryWrites=true&w=majority`
mongoose.connect(URL,{useNewUrlParser:true,useUniFiedTopology:true}).then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`server running at ${PORT}`)
        // console.log()
    })
    
}).catch(error=>console.log('error',error.message))