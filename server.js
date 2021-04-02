require('dotenv').config();
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', require('./routes/index'));

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
