const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const router = require("./routes/user.route");
const cors = require('cors');
const PORT = process.env.PORT;
const URI = process.env.URI;

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  methods: 'GET, POST',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  mongoose.connect(URI)
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Database could not connect');
      console.log(err);
    });
});