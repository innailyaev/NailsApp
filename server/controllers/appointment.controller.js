const appointmentModel = require('../models/appointment.model');


const createNewAppointment = async (req, res) => {
    // const appointmentDetails = { name, phone, treatment, price, date, hour } = req.body;
    // console.log(appointmentDetails);        
    
    try{
    const appointment = new appointmentModel({
        ...req.body,
    });

    await appointment.save();
    res.status(200).send(appointment);
    }catch (e){
        res.json({"error": e});
    }
  };


  module.exports = {
    createNewAppointment   
}
