const express = require('express');
const mongoDB = require('mongoose');
const routesOfUsers = require('./routes/routesOfUsers');
const routesOfTodos = require('./routes/routesOfTodos');
const { param } = require('express/lib/request');
const authorzation = require('./middleware/auth')
const app = express();
app.use(express.json());

///////////////////////////////////////connect to database in mongodb compass
mongoDB.connect ('mongodb://localhost:27017/lab4database')
app.use('/users',routesOfUsers);
app.use(authorzation);
app.use('/todos',routesOfTodos);


app.use('*', (req, res, next) => {
    res.status(404).end();
  })

app.use((err, req, res, next) => {
    console.log(err)
    res.json(err)
    res.status(404).end();
});

const { port = 3000 } = process.env;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})