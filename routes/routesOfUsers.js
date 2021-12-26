
const express = require('express');
const routesOfUsers = express.Router();
const User = require ('../models/userSchema');
const {find , create , update , deleteone,findByUserName,login}= require('../controllers/usersControlers')


// routesOfUsers.get('/', (req, res, next) => {
//   find({}).then(data => res.json(data)).catch(err=> next(err));
   
// }
// );

routesOfUsers.get('/:userName', (req, res, next) => {
  const {userName}=req.params;
  findByUserName({userName}).then(data => res.json(data)).catch(err=> next(err));
   
}
);

routesOfUsers.post('/', async(req, res, next) => {
  const body = req.body;
   create(body).then(data => res.json(data)).catch(err=> next(err));
  
}
);
routesOfUsers.post('/login', async (req, res, next) => {
  const { userName, password } = req.body;
  const token = await login({ userName, password });
  res.json({ token })
})


routesOfUsers.patch('/:userName',(req, res, next) => {
  const {userName}=req.params;
  const body =req.body;
 update({userName} , {body}).then(data => res.json(data)).catch(err=> next(err));

});

routesOfUsers.delete('/:userName',(req, res, next) => {
  const {userName}=req.params;
  deleteone({userName}).then(data => res.send("Data is deleted")).catch(err=> next("err"));
});


module.exports=routesOfUsers;

