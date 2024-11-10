const express = require('express');
const app = express();


app.listen(3001, () => console.log('Server is running'));

app.get('/', (req, res)=>
{
    res.send('Your server is running!');
});