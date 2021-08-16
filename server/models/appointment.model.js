const mongoose = require ('mongoose');


const appointmentSchema = mongoose.Schema ({
    name:{
        type:String,
        require:true,
        trim:true
    },
    phone:{
        type:Number,
        require:true,
        trim:true
    },
    treatment: {
        type: String,
    },
    price:{
        type: Number,
        required:false,
    },
    date:{
        type: Date,
        
    },
    hour:{
        type: String,
    }
  
});

const appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = appointment;
