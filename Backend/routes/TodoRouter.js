const router = require('express').Router();



router.post('/todo', async (req, res) => {
    const { content } = req.body;

    try {
        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const newTodo = new Todo({ content });
        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);

    } catch (error) {
        res.status(500).json({ error: 'Failed to save todo' });
    }
})

module.exports = router;