const User = require('../models/userSchema');
const jwt = require('jsonwebtoken')


const find =(q)=> User.find(q)
const create=(user)=>User.create(user);
const update =({userName} ,body)=>User.findOneAndUpdate({userName:userName},{$set:{userName:body.userName,firstName:body.firstName,lastName:body.lastName,dob:body.dob}})
const deleteone =({userName})=>User.findOneAndDelete({userName:userName});
const findByUserName= ({userName})=>User.findOne({userName:userName});


const login = async ({ userName, password }) => {
  const user = await User.findOne({ userName}).exec(); 
  const isValid = await user.comparePassword(password , user.password); 
  if (!isValid) {
    throw new Error('UN_AUTH')
  }

  const token = jwt.sign({
    userName, _id:user.id,
    maxAge: '1d'
  }, 'fjoiy43yfh8743tyf4hry4hf78436hrfyr7437thf48395')
   res.json(token)
}
  
module.exports={find , create , update,deleteone,findByUserName,login}