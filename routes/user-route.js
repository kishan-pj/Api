const express =require('express');
const router =express.Router();

router.get('/',(req,resp,next)=>{
    resp.status(200).json({
        message:'this is user get request'
    })

})

router.post('/',(req,resp,next)=>{
    resp.status(200).json({
        message:'this is user post request'
    })

})


module.exports= router;