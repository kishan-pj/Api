const express = require("express");
const router = express.Router();
const Register = require("../model/register");
const mongoose = require("mongoose");
const bcrypt = require('bcrpytjs');
const register = require("../model/register");

router.post('/',(req,resp,next)=>{
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err)
        {
            return resp.status(500).json({
                error:err
            })
        }
        else
        {
            const register = new Register({
                _id:mongoose.Schema.Types.ObjectId,
                fullname:req.body.fullname,
                username:req.body.username,
                password:hash,
                phone:req.body.phone,
                address:req.body.address,
            })

            register.save()
            .then(result =>{
                resp.status(200).json({
                    new_register:result
                })
            })
            .catch(err =>{
                resp.status(500).json({
                    error:err
                })
            })
        }
    })
})












module.exports =router;