const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const trackRouter = require('./routes/tracks');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes go here
app.use('/tracks', trackRouter);
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
