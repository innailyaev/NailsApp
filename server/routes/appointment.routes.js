const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.post('/',(req,res)=>{
    appointmentController.createNewAppointment(req, res); 
}).put('/update/:id', (req, res) => {
    appointmentController.updateAppointment(req,res);
}).delete('/delete/:id',(req,res)=>{
    appointmentController.deleteAppointment(req,res);
})

module.exports = router;