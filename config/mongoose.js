const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://tejanoule007:7zvrUEvqSyzCKBvB@cluster0.ktpviuw.mongodb.net/Habit_tracker`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
