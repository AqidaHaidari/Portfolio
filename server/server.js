const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config ();

const app = express ();

// Middleware
app.use (express.json ());
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Use environment variable or fallback to localhost
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use (cors (corsOptions));



// MongoDB Connection
mongoose
  .connect (process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then (() => console.log ('MongoDB connected'))
  .catch (err => console.error (err));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));


// Start Server
const PORT = process.env.PORT || 4000;
app.listen (PORT, () => console.log (`Server running on port ${PORT}`));
