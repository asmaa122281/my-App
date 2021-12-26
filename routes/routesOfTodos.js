const express = require('express');
const routeOfTOdos = express.Router();
const Todo = require ('../models/todoSchem');
const {find , create,update,deleteone,findByUserName}= require('../controllers/todosControlers')


routeOfTOdos.get('/:userName', (req, res, next) => {
  const {userName}=req.params;
  findByUserName({userName}).then(data => res.json(data)).catch(err=> next(err));
   
}
);

routeOfTOdos.post('/', async (req, res, next) => {
  const userId = req.user._id;
  console.log(userId);
  create({ ...req.body, user: userId })
    .then(doc => res.json(doc))
    .catch(e => next(e))
});

routeOfTOdos.patch('/:userName',(req, res, next) => {
  const {userName}=req.params;
  const body =req.body;
 update({userName} , {body}).then(data => res.json(data)).catch(err=> next(err));

});

routeOfTOdos.delete('/:userName',(req, res, next) => {
  const {userName}=req.params;
  deleteone({userName}).then(data => res.send("Data is deleted")).catch(err=> next("err"));
});

module.exports= routeOfTOdos;
