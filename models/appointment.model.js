var config=require('../dbConfig');
const sql= require('msnodesqlv8');

const Appointment = function(appointment){
  this.Staff_ID = appointment.Staff_ID;
  this.Service_ID = appointment.Service_ID;
  this.Date = appointment.Date;
  this.Start_Hour = appointment.Start_Hour;
  this.Status = appointment.Status;
};

Appointment.create = (newAppointment, result) => {
  sql.query(config, "INSERT INTO Appointment (Staff_ID, Service_ID, Date, Start_Hour, Status) VALUES (?, ?, ?, ?, ?)",
    [newAppointment.Staff_ID, newAppointment.Service_ID, newAppointment.Date, newAppointment.Start_Hour, newAppointment.Status],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("Created appointment: ", { id: res.insertId, ...newAppointment });
    }
  );
};

module.exports = Appointment;