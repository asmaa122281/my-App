const mongoose = require('mongoose');
const todoscchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true

    },

    status: {
        type: [ { type: String, enum: ["to-do", "in progress", "done"] } ],
        required: true
      },
    

    tags:  [
            {    
                type: String,  
                maxlength: 10,
                required: true
            }
        ],
    

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
        
    }


})

const Todo = mongoose.model('Todo', todoscchema);
module.exports = Todo