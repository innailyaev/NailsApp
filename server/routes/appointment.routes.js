const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.post('/',(req,res)=>{
    appointmentController.createNewAppointment(req, res); 
})

module.exports = router;