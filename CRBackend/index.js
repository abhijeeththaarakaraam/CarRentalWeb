const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const cars = require('./data/cars');
const users = require('./data/users');
const Car = require('./models/carModel');
const User = require('./models/userModel');
const Booking = require('./models/bookingModel');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/bookings', require('./routes/bookingsRoute'));

// Database connection and seeding
function connectDB() {
    mongoose.connect('mongodb+srv://viratkohli:12345@cluster0.qrgjcg5.mongodb.net/another');

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('MongoDB Connection Successful');
    });

    connection.on('error', (error) => {
        console.log('MongoDB Connection Error:', error);
    });
}

async function seedDatabase() {
    try {
        await Booking.deleteMany(); // Delete all bookings
        console.log('All bookings deleted');

        await Car.deleteMany(); // Delete all cars
        console.log('All cars deleted');

        await User.deleteMany(); // Delete all users
        console.log('All users deleted');

        await Car.insertMany(cars); // Add new cars
        console.log('All cars added');

        await User.insertMany(users); // Add new users
        console.log('All users added');
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
}

connectDB();
seedDatabase();

app.listen(5001, () => {
    console.log(`Server started on port 5001`);
});


