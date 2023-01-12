const express= require('express');
const app = express();
const userroute =require('./routes/user-route');
const patientroute =require('./routes/patient-routejs');
const mongoose =require('mongoose');
const bodyparser =require('body-parser');



mongoose.connect('mongodb://127.0.0.1:27017/duplicate')
.then(()=>{
    console.log("connected to mongodb server")})
.catch((err)=>next(err)) 


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use('/user',userroute);
app.use('/patient',patientroute);

app.use((req,resp,next)=>{
    resp.status(404).json({
        error:'bad request'
    })
})


app.use((req,resp,next) => {
    resp.status(200).json({
        message:'app is running on port:3000'
    })
})

module.exports =app;