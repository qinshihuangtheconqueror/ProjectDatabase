module.exports = app => {
    const router = require('express').Router();
    const sql = require('../models/database');
<<<<<<< HEAD
    const authMiddleware = require('../middlewares/auth.middleware.admin')

    router.get('/adminDoctors', authMiddleware.loggedin, async(req, res)=>{
=======
    //const expressWs = require('express-ws');

    //expressWs(router);
    //let clients = [];

    router.get('/adminDoctors', async(req, res)=>{
>>>>>>> cb456ea (Trying merge)
        sql.query('SELECT * FROM staff', (err, results) => {
          const doctors = results;
          sql.query('SELECT COUNT(staff_id) AS staffCount FROM staff', (err, countResult) => {
            const staffCount = countResult[0].staffCount;
            sql.query('SELECT COUNT(patient_id) AS patientCount FROM Patient', (err, countRes) =>{
              const patientCount = countRes[0].patientCount;
              res.render('adminDoctors', { doctors, staffCount, patientCount });
            })
          });
      });
    });

    // Express route to handle adding a new doctor
    router.post('/adminDoctors', async (req, res) => {
        const { Name, Phone } = req.body;
        
        if (Name && Phone){
            sql.query('INSERT INTO staff (Name, Phone) VALUES (?, ?)', [Name, Phone], (err, result) => {
            if (err) {
                console.error('Error adding doctor: ', err);
                res.status(500).json({ error: 'Error adding doctor' });
                return;
            }
            // If the insertion was successful, you can send a success response
            res.status(200).json({ message: 'Doctor added successfully' });
            });
        }
    });

    router.delete('/adminDoctors', async (req, res) => {
        const { Staff_Id } = req.body;
      
        // Check if the Staff_Id for removing the doctor is present
        if (Staff_Id) {
          // Remove the doctor from the database using Staff_Id
          sql.query('DELETE FROM staff WHERE Staff_ID = ?', [Staff_Id], (err, result) => {
            if (err) {
              console.error('Error removing doctor: ', err);
              res.status(500).json({ error: 'Error removing doctor' });
              return;
            }
            // If the deletion was successful, send a success response
            res.status(200).json({ message: 'Doctor removed successfully' });
          });
        } else {
          // If Staff_Id is missing, respond with an error
          res.status(400).json({ error: 'Missing doctor ID' });
        }
      });

<<<<<<< HEAD
    router.get('/adminAnalyst', authMiddleware.loggedin, (req,res)=>{
      sql.query('SELECT * FROM staff', (err, results) => {
        const doctors = results;
        sql.query('SELECT COUNT(staff_id) AS staffCount FROM staff', (err, countResult) => {
          const staffCount = countResult[0].staffCount;
          sql.query('SELECT COUNT(patient_id) AS patientCount FROM Patient', (err, countRes) =>{
            const patientCount = countRes[0].patientCount;
            res.render('adminAnalyst', { doctors, staffCount, patientCount });
          })
        });
      });  
    });
    
    router.get('/adminDoctors/in4', authMiddleware.loggedin, (req,res)=>{
            res.render('adminDoctorIn4');
    });

    router.get('/adminAppointment', authMiddleware.loggedin, (req,res)=>{
      sql.query('SELECT * FROM staff', (err, results) => {
        const doctors = results;
        sql.query('SELECT COUNT(staff_id) AS staffCount FROM staff', (err, countResult) => {
          const staffCount = countResult[0].staffCount;
          sql.query('SELECT COUNT(patient_id) AS patientCount FROM Patient', (err, countRes) =>{
            const patientCount = countRes[0].patientCount;
            res.render('adminAppointment', { doctors, staffCount, patientCount });
          })
        });
      });  
    });

    router.get('/adminPatient', authMiddleware.loggedin, (req,res)=>{
      sql.query('SELECT * FROM patient', (err, results) => {
        const patients = results;
        sql.query('SELECT COUNT(staff_id) AS staffCount FROM staff', (err, countResult) => {
          const staffCount = countResult[0].staffCount;
          sql.query('SELECT COUNT(patient_id) AS patientCount FROM Patient', (err, countRes) =>{
            const patientCount = countRes[0].patientCount;
            res.render('adminPatient', { patients, staffCount, patientCount });
          })
        });
      });  
    });

    router.get('/adminPatient/in4', authMiddleware.loggedin, (req, res)=>{
      res.render('adminPatientIn4');
    })
=======
    // router.ws('/ws', (ws, req) => {
    //     clients.push(ws); // Store the WebSocket connection
        
    //     sql.query('SELECT * FROM staff', (err, results) => {
    //         if (err) {
    //           console.error('Error fetching doctors: ', err);
    //           return;
    //         }
    //         ws.send(JSON.stringify(results));
    //     });
        
    //     ws.on('close', () => {
    //         clients = clients.filter((client) => client !== ws); // Remove closed WebSocket connections
    //     });
    // });

    router.get('/adminAnalyst',(req,res)=>{
        res.render('adminAnalyst');
    });
    
    router.get('/adminDoctors/in4',(req,res)=>{
            res.render('adminDoctorIn4');
    });
>>>>>>> cb456ea (Trying merge)
    
    app.use(router);
}