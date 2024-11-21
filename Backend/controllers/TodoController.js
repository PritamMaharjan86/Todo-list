const Todo = require('../models/Todo');


const newTodo = async (req, res) => {
    const data = req.body;
    try {
        const model = new Todo(data);
        await model.save();
        res.status(201)
            .json({
                message: 'Success to save',
                success: true,
            })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to save',
            success: false,
        })
    }
}

module.exports = {newTodo};