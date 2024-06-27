const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const router = require("./routes/user.route");
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: ['https://frontend-five-sigma-26.vercel.app'], // Specify allowed origins
  methods: 'GET, POST',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Use routes
app.use("/", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to the database and start the server
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
