const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
let userSchema = new Schema({
    userName: {
        type: String,
        minlength: 8,
        required: true,
        unique: true

    },

    firstName: {

        type: String,
        required: true,
        minLength: [3, 'Name is too short! it must be >3'],
        maxLength: 15

    },
    lastName: {
        type: String,
        minlength: [3, 'Name is too short! it must be >3'],
        maxlength: 15,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    dob: Date,
   
},

{
    timestamps:true
},
    {
        toJSON: {
            transform: (doc, ret, options) => {
                delete ret.password;
                delete ret.__v
                return ret;
            },
        }
    }


)



userSchema.pre('save',  function () {
    const hash =bcrypt.hashSync(this.password, 8);
    this.password = hash;

})

userSchema.methods.comparePassword =  function (password) {
    return  bcrypt.compare(password, this.password);
    }



const User = mongoose.model('User', userSchema);
module.exports = User
