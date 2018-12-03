const mongoose = require('mongoose');

const EmpSchema = mongoose.Schema({
    
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    emp_id:{
        type:String,
        required:true
    }
})

const Employee = module.exports = mongoose.model('Employee',EmpSchema);