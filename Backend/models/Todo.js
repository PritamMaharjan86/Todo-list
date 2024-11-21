const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        todo:
        {
            type: String,
            required: true,
        },
        
        complete:
        {
            type: Boolean,
            required: true,
        }
    }
)

module.exports = mongoose.model('todos', TodoSchema);