const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const dotenv = require('dotenv');

dotenv.config();

// app.use(cors());

const app = express();
app.use(cors());

connectDB();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
