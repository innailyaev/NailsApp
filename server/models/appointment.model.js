const mongoose = require ('mongoose');
var validator = require('validator');


const appointmentSchema = mongoose.Schema ({
    name:{
        type:String,
        require:true,
        trim:true,
        unique:false
    },
    phone:{
        type:String,
        require:true,
        unique:false,
        validate(value){
            if(!validator.isMobilePhone(value ,'he-IL')){
                throw new Error('not a valid number')
            }
        }
    },
    treatment: {
        type: String,
        require:true,
        unique:false
    },
    price:{
        type: Number,
        required:false,
        unique:false
    },
    date:{
        type: String,
        required:true,
        unique:false
        
    },
    hour:{
        type: String,
        required:true,
        unique:false
    }
  
});

const appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = appointment;
