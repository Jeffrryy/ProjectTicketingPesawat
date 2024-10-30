import User from './userModel.js';
import Booking from './bookingModel.js';
import Ticket from './ticketModel.js';
import Flight from './flightModel.js';
import Airline from './airlineModel.js';

// Relasi antara User dan Booking
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

// Relasi antara Booking dan Ticket
Booking.hasMany(Ticket, { foreignKey: 'bookingId' });
Ticket.belongsTo(Booking, { foreignKey: 'bookingId' });

// Relasi antara Flight dan Ticket
Flight.hasMany(Ticket, { foreignKey: 'flightId' });
Ticket.belongsTo(Flight, { foreignKey: 'flightId' });

// // Relasi antara Airline dan Flight
Airline.hasMany(Flight, { foreignKey: 'airlineId' });
Flight.belongsTo(Airline, { foreignKey: 'airlineId' });

