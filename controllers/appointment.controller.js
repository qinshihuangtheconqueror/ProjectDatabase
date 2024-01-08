const Appointment = require('../models/appointment.model')

exports.makeApponitment = (req, res) => {
    const user = req.session.user;
    const data = req.body;

    const appointment = new Appointment({
        Staff_ID: parseInt(data.Staff_ID, 10),
        Service_ID: parseInt(data.Service_ID, 10),
        Date: data.Date,
        Start_Hour: data.Start_Hour,
        Status: 'Pending',
    });

    Appointment.create(appointment, res);
    res.redirect('/patientAppointment');
    console.log(appointment);
}