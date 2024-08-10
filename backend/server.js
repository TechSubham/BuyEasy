const express = require("express");
const app = express();
const connectDB = require('./db');
const cors = require('cors');





connectDB()
app.use(cors())
app.use(express.json())

const userRoutes = require('../backend/Routes/User');
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5001;
app.listen(5001, console.log(`Server Started on PORT ${PORT}`))

