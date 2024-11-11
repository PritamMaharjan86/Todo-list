const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

require('./models/Database');

app.listen(3001, () => console.log('Server is running'));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Your server is running!');
});

