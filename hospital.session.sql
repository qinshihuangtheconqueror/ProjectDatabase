INSERT INTO Room (Room_ID, Room_name)
VALUES
(1, 'Room 101'),
(2, 'Room 102'),
(3, 'Room 103'),
(4, 'Room 201'),
(5, 'Room 202'),
(6, 'Room 203'),
(7, 'Room 301'),
(8, 'Room 302'),
(9, 'Room 303'),
(10, 'Room 401');
INSERT INTO Department (Department_ID, Department_name, Room_ID)
VALUES
(1, 'Cardiology', 1),
(2, 'Orthopedics', 2),
(3, 'Neurology', 3),
(4, 'Ophthalmology', 4),
(5, 'Pediatrics', 5);

-- Insert 10 records for Position
INSERT INTO Position (Position_ID, Department_ID, Specialization, Salary)
VALUES
(1, 1, 'Cardiologist', 120000),
(2, 2, 'Orthopedic Surgeon', 150000),
(3, 3, 'Neurologist', 130000),
(4, 4, 'Ophthalmologist', 140000),
(5, 5, 'Pediatrician', 110000),
(6, 1, 'Nurse - General Care', 60000),
(7, 2, 'Nurse - Surgical', 65000),
(8, 3, 'Head Nurse', 62000),
(9, 4, 'Nurse - Eye Care', 63000),
(10, 5, 'Pediatric Nurse', 59000);

-- Insert 10 records for Staff
INSERT INTO Staff (Staff_ID, Position_ID, Staff_name, Phone, Address, DOB, Gender, Email)
VALUES
(1, 1, 'John Doe', 12345678, '123 Main St', '1980-01-01', 'M', 'john.doe@example.com'),
(2, 2, 'Jane Smith', 98765432, '456 Oak St', '1990-02-15', 'F', 'jane.smith@example.com'),
(3, 3, 'Bob Johnson', 55512345, '789 Pine St', '1985-05-20', 'M', 'bob.johnson@example.com'),
(4, 1, 'Alice Brown', 88855512, '101 Elm St', '1992-11-10', 'F', 'alice.brown@example.com'),
(5, 2, 'Charlie Davis', 77788899, '202 Maple St', '1988-08-03', 'M', 'charlie.davis@example.com'),
(6, 3, 'Eva Miller', 44422233, '303 Cedar St', '1975-04-18', 'F', 'eva.miller@example.com'),
(7, 1, 'David Wilson', 99944455, '404 Birch St', '1982-09-25', 'M', 'david.wilson@example.com'),
(8, 2, 'Grace Taylor', 66677788, '505 Oak St', '1997-07-12', 'F', 'grace.taylor@example.com'),
(9, 3, 'Frank Harris', 11122233, '606 Pine St', '1987-03-30', 'M', 'frank.harris@example.com'),
(10, 1, 'Helen Martinez', 22233344, '707 Elm St', '1995-12-05', 'F', 'helen.martinez@example.com');

-- Insert 10 records for Patient
INSERT INTO Patient (Patient_ID, Name, Phone, Address, DOB, Health_insurance, Gender, Email)
VALUES
(1, 'Mark Johnson', 55544433, '123 Oak St', '1985-03-15', 987654321, 'M', 'mark.johnson@example.com'),
(2, 'Emily White', 66677788, '456 Pine St', '1992-08-22', 123456789, 'F', 'emily.white@example.com'),
(3, 'Michael Turner', 77788899, '789 Cedar St', '1978-06-10', 654321987, 'M', 'michael.turner@example.com'),
(4, 'Olivia Parker', 88899900, '101 Birch St', '1989-12-03', 789012345, 'F', 'olivia.parker@example.com'),
(5, 'Daniel Smith', 99900011, '202 Elm St', '1995-04-18', 543210987, 'M', 'daniel.smith@example.com'),
(6, 'Sophia Davis', 11122233, '303 Maple St', '1980-11-27', 210987654, 'F', 'sophia.davis@example.com'),
(7, 'Ethan Wilson', 22233344, '404 Cedar St', '1998-09-08', 876543210, 'M', 'ethan.wilson@example.com'),
(8, 'Isabella Taylor', 33344455, '505 Pine St', '1987-02-14', 109876543, 'F', 'isabella.taylor@example.com'),
(9, 'Alexander Harris', 44455566, '606 Oak St', '1993-07-01', 234567890, 'M', 'alexander.harris@example.com'),
(10, 'Ava Martinez', 55566677, '707 Birch St', '1975-05-20', 567890123, 'F', 'ava.martinez@example.com');

-- Insert 5 records for Service
INSERT INTO Service (Service_ID, Name, Value)
VALUES
(1, 'General Checkup', 75),
(2, 'X-ray', 150),
(3, 'Blood Test', 80),
(4, 'MRI Scan', 300),
(5, 'Dental Cleaning', 50);



-- Insert 5 records for Supplier
INSERT INTO Supplier (Supplier_ID, Name, Phone, Address, Email)
VALUES
(1, 'Supplier A', 55512345, '123 Oak St', 'supplierA@example.com'),
(2, 'Supplier B', 66623456, '456 Pine St', 'supplierB@example.com'),
(3, 'Supplier C', 77734567, '789 Cedar St', 'supplierC@example.com'),
(4, 'Supplier D', 88845678, '101 Birch St', 'supplierD@example.com'),
(5, 'Supplier E', 99956789, '202 Elm St', 'supplierE@example.com');

-- Insert 20 records for Medication
INSERT INTO Medication (Medication_ID, Name, Value, Supplier_ID)
VALUES
(1, 'Medicine A', 10, 1),
(2, 'Medicine B', 15, 2),
(3, 'Medicine C', 20, 3),
(4, 'Medicine D', 25, 4),
(5, 'Medicine E', 30, 5),
(6, 'Medicine F', 35, 1),
(7, 'Medicine G', 40, 2),
(8, 'Medicine H', 45, 3),
(9, 'Medicine I', 50, 4),
(10, 'Medicine J', 55, 5),
(11, 'Medicine K', 60, 1),
(12, 'Medicine L', 65, 2),
(13, 'Medicine M', 70, 3),
(14, 'Medicine N', 75, 4),
(15, 'Medicine O', 80, 5),
(16, 'Medicine P', 85, 1),
(17, 'Medicine Q', 90, 2),
(18, 'Medicine R', 95, 3),
(19, 'Medicine S', 100, 4),
(20, 'Medicine T', 105, 5);

-- Insert 5 records for Department

-- Insert 20 records for Stock
INSERT INTO Stock (Stock_ID, Medication_ID, Current_number, Room_ID, Update_Time)
VALUES
(1, 1, 200, 1, GETDATE()),
(2, 2, 150, 2, GETDATE()),
(3, 3, 100, 3, GETDATE()),
(4, 4, 120, 4, GETDATE()),
(5, 5, 180, 5, GETDATE()),
(6, 6, 90, 1, GETDATE()),
(7, 7, 110, 2, GETDATE()),
(8, 8, 80, 3, GETDATE()),
(9, 9, 70, 4, GETDATE()),
(10, 10, 160, 5, GETDATE()),
(11, 11, 120, 1, GETDATE()),
(12, 12, 100, 2, GETDATE()),
(13, 13, 130, 3, GETDATE()),
(14, 14, 95, 4, GETDATE()),
(15, 15, 140, 5, GETDATE()),
(16, 16, 75, 1, GETDATE()),
(17, 17, 85, 2, GETDATE()),
(18, 18, 110, 3, GETDATE()),
(19, 19, 125, 4, GETDATE()),
(20, 20, 105, 5, GETDATE());

-- Insert 3 records for Permission
INSERT INTO Permission (Permission_ID, User_management, Security, Configuration, Trails_and_Logs)
VALUES
(1, 1, 1, 1, 1), -- Admin (Full access)
(2, 1, 0, 0, 0), -- Staff (Management of schedules)
(3, 0, 0, 0, 0); -- Patient (Order appointments)


-- Insert 20 records for Account
INSERT INTO Account (Account_ID, Name, Password, Permission_ID, Staff_ID, Patient_ID)
VALUES
(1, 'admin','admin123',1,NULL,NULL),
-- Staff-linked accounts
(21, 'staff_account1', 'password_staff1', 2, 1, NULL),
(22, 'staff_account2', 'password_staff2', 2, 2, NULL),
(23, 'staff_account3', 'password_staff3', 2, 3, NULL),
(24, 'staff_account4', 'password_staff4', 2, 4, NULL),
(25, 'staff_account5', 'password_staff5', 2, 5, NULL),
(26, 'staff_account6', 'password_staff6', 2, 6, NULL),
(27, 'staff_account7', 'password_staff7', 2, 7, NULL),
(28, 'staff_account8', 'password_staff8', 2, 8, NULL),
(29, 'staff_account9', 'password_staff9', 2, 9, NULL),
(30, 'staff_account10', 'password_staff10',2, 10, NULL),
-- Patient-linked accounts
(31, 'patient_account1', 'password_patient1', 3, NULL, 1),
(32, 'patient_account2', 'password_patient2', 3, NULL, 2),
(33, 'patient_account3', 'password_patient3', 3, NULL, 3),
(34, 'patient_account4', 'password_patient4', 3, NULL, 4),
(35, 'patient_account5', 'password_patient5', 3, NULL, 5),
(36, 'patient_account6', 'password_patient6', 3, NULL, 6),
(37, 'patient_account7', 'password_patient7', 3, NULL, 7),
(38, 'patient_account8', 'password_patient8', 3, NULL, 8),
(39, 'patient_account9', 'password_patient9', 3, NULL, 9),
(40, 'patient_account10', 'password_patient10',3, NULL, 10);
