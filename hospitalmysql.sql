CREATE DATABASE Hospital;

USE Hospital;

Create Table Specialization(
	Specialization_ID INT primary key,
	Specialization_Name varchar(255),
	Department varchar(255)
);

CREATE TABLE staff (
    Staff_ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    Specialization_ID INT,
    Salary FLOAT,
    Phone INT,
    Address VARCHAR(255),
    DOB DATE,
    Gender CHAR(1),
    Email VARCHAR(255),
    FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID)
);

CREATE TABLE Service (
    Service_ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Value INT,
    Specialization_ID INT,
    FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID)
);

 Create Table Patient
 (
	Patient_ID int Primary Key,
	Name varchar(255),
	Phone int,
	Address varchar(255),
	DOB date,
	Health_Insurance INT,
	Gender char(1),
	Email varchar(255)
 );
 
 CREATE TABLE Account (
    Account_ID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(100) UNIQUE,
    Name VARCHAR(255),
    Password VARCHAR(50),
    Staff_ID INT,
    Patient_ID INT,
    Type_Of_Account INT,
    FOREIGN KEY (Staff_ID) REFERENCES staff(Staff_ID),
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID)
);
 
Create Table Room
 (
	Room_ID int primary key,
	Name varchar(255),
	Status int,
	Type varchar(255),
	Value int
 );

CREATE TABLE Appointment (
    Appointment_ID INT PRIMARY KEY,
    Patient_ID INT,
    Staff_ID INT,
    Service_ID INT,
    Start_Time DATE,
    End_Time DATE,
    Room_ID INT,
    Payment VARCHAR(255),
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID),
    FOREIGN KEY (Staff_ID) REFERENCES Staff(Staff_ID),
    FOREIGN KEY (Service_ID) REFERENCES Service(Service_ID),
    FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID)
);
