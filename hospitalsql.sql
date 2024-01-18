-- Create the Hospital database
CREATE DATABASE Hospital;
GO

USE Hospital;
GO

-- Create the Specialization table
CREATE TABLE Specialization (
    Specialization_ID INT PRIMARY KEY,
    Specialization_Name VARCHAR(255),
    Department VARCHAR(255)
);

-- Create the staff table
CREATE TABLE staff (
    Staff_ID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255),
    Specialization_ID INT,
    Salary INT,
    Phone VARCHAR(11),
    Address VARCHAR(255),
    DOB DATE,
    Gender CHAR(1),
    FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID)
);

-- Create the Service table
CREATE TABLE Service (
    Service_ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Value INT,
    Specialization_ID INT,
    FOREIGN KEY (Specialization_ID) REFERENCES Specialization(Specialization_ID)
);

-- Create the Patient table
CREATE TABLE Patient (
    Patient_ID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255),
    Phone VARCHAR(255),
    Address VARCHAR(255),
    DOB DATE,
    Health_Insurance VARCHAR(255),
    Gender CHAR(1),
);

-- Create the Account table
CREATE TABLE Account (
    Account_ID INT PRIMARY KEY IDENTITY,
    Email VARCHAR(100) UNIQUE,
    Name VARCHAR(255),
    Password VARCHAR(50),
    Staff_ID INT,
    Patient_ID INT,
    Type_Of_Account INT,
    FOREIGN KEY (Staff_ID) REFERENCES staff(Staff_ID),
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID)
);

-- Create the Room table
CREATE TABLE Room (
    Room_ID INT PRIMARY KEY,
    Name VARCHAR(255),

    Type VARCHAR(255),
    Value INT
);

-- Create the Appointment table
CREATE TABLE Appointment (
    Appointment_ID INT PRIMARY KEY IDENTITY,
    Patient_ID INT,
    Staff_ID INT,
    Service_ID INT,
    Date DATE,
    Start_Hour TIME,
    End_Hour TIME,
    Room_ID INT,
    Payment VARCHAR(255),
    Status VARCHAR(255),
	Created_At TIMESTAMP,
    FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID),
    FOREIGN KEY (Staff_ID) REFERENCES staff(Staff_ID),
    FOREIGN KEY (Service_ID) REFERENCES Service(Service_ID),
    FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID)
);

