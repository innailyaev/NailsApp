const appointmentModel = require('../models/appointment.model');
const notWorkingDaysModel = require('../models/notWorkingDays.model');
const workHours = require('../utilitiy/workHours.utility');
const moment = require('moment');
moment().format(); 

const createNewAppointment = async (req, res) => {
    const date = req.body.date;
   
    const exsit = await appointmentModel.findOne({ date: req.body.date, hour: req.body.hour });
    if (exsit) {
      return res
        .status(400)
        .json({ error: "Appointment is already taken, please find a different one" });
    }
    try{
    const appointment = new appointmentModel({
        ...req.body,
    });

    await appointment.save();
    const booked = await appointmentModel.find({ date: req.body.date });
    if (booked.length === workHours.workHours.length)
    {
    //   const chosenDate = moment(date,"MM-DD-YYYY");
    //   console.log("momentttttttttttt",chosenDate);
      await notWorkingDaysModel.updateOne({ $push:{fullyBookedDate: date}});
    } 
    
    res.status(200).json({ success: "Your appointment was scheduled successfully",
                        appointment:appointment });
    }catch (e){
        res.json({"error": e});
    }
  };

  const updateAppointment = async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','phone', 'treatment','date','hour'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const appointment = await appointmentModel.findOne({ _id: req.params.id})

        if (!appointment) {
            return res.status(404).send()
        }

        updates.forEach((update) => appointment[update] = req.body[update])
        await appointment.save()
        res.send(post)
    } catch (e) {
        res.status(400).send(e)
    }
  }

  const deleteAppointment = async (req, res) => {

      console.log(req.params.id);

    try {
      const appointment = await appointmentModel.findByIdAndDelete({  _id: req.params.id });
      if (!appointment) {
        res.status(404).send()
        }
      res.status(200).json({ success: "The Appoinment has been deleted", appointment });
    } catch (error) {
      res.status(400).json({ error });
    }
  };


  module.exports = {
    createNewAppointment,
    updateAppointment,
    deleteAppointment  
}
