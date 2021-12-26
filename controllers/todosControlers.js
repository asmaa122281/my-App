const Todo = require('../models/todoSchem');


const find =(q)=> Todo.find(q)
const create=({ data })=>Todo.create({ data});
const update =({userName} ,body)=>Todo.findOneAndUpdate({userName:userName},{$set:{title:body.title,status:body.status,tags:body.tags}})
const deleteone =({userName})=>Todo.findOneAndDelete({userName:userName});
const findByUserName= ({userName})=>Todo.findOne({userName:userName});


module.exports={find , create,update, deleteone,findByUserName}