const { newTodo } = require('../controllers/TodoController');

const router = require('express').Router();

router.get('/', (req, res)=>
{
    res.send('All tasks')
})

router.post('/', newTodo);


module.exports = router;