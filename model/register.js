const mongoose =require('mongoose');

registerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullname:String,
    username:String,
    password:String,
    phone:Number,
    address:String
})

module.exports = mongoose.model('register',registerSchema);