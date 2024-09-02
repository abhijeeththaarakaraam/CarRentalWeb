const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

router.post('/bookcar', async (req, res) => {
    try {
        console.log('Booking Request Body:', req.body); // Log request body
        const newBooking = new Booking(req.body);
        await newBooking.save();
        console.log('Booking Saved:', newBooking); // Log saved booking
        res.status(200).send('Booking successful');
    } catch (error) {
        console.error('Error Booking Car:', error.message); // Log error
        res.status(400).send(error.message);
    }
});

router.get('/getallbookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        console.log('Fetched Bookings:', bookings); // Log fetched bookings
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error Fetching Bookings:', error.message); // Log error
        res.status(400).send(error.message);
    }
});

module.exports = router;
