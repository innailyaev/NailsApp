const mongoose = require ('mongoose');


const notWorkingDaysSchema = mongoose.Schema ({

    fullyBookedDates: [
        {
            type: String,
            required: false,
            unique: true
        }
    ],


})


const notWorkingDaysModel = mongoose.model('notWorkingDays', notWorkingDaysSchema);
module.exports = notWorkingDaysModel;