const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.listen(3001, () => console.log('Server is running'));

app.get('/', (req, res)=>
{
    res.send('Your server is running!');
});