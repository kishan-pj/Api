const mongoose =require('mongoose');

const patientSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:Number,
    address:String
})

module.exports = mongoose.model('Patient',patientSchema);