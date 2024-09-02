const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  car: { type: String }, // Store the name of the car
  carImageUrl: { type: String }, // Store the image URL of the car
  user: { type: String }, // Store the username
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' }, // Reference to Car model for further details
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model for further details
  bookedTimeSlots: {
    from: { type: Date },
    to: { type: Date }
  },
  totalHours: { type: Number },
  totalAmount: { type: Number },
  driverRequired: { type: Boolean },
  rentPerHour: { type: Number }, // Store the rent per hour
  paymentStatus: { type: String, default: "Done" } // Store the payment status
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
