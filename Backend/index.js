const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const TodoRouter = require('./routes/TodoRouter')

dotenv.config();

require('./models/Database');

app.listen(3001, () => console.log('Server is running on'));

app.use(cors());
app.use(bodyParser.json);
app.use('/todos', TodoRouter)

app.get('/', (req, res) => {
    res.send('Your server is running!');
});