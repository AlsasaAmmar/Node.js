const express = require('express');
const app= express();

const path = require('path');
const members= require('./members')
const logger = require('./Middleware/logger')

//Set static folder
/*this makes this folder a static one and all the files there will be routed
app.use helps us create a middle ware*/ 
app.use(express.static(path.join(__dirname, 'public')));
//app.use(logger)
app.get('/api/members', (req, res)=> {
    res.json(members)
});
//get a single member
app.get('/api/members/:id', (req, res)=>{
    const found = members.some(member => member.id === )//some checks if the condition is right and returns true or false
    res.json(members.filter(member => member.id === req.params.id))
})


const PORT  = process.env.PORT || 1818;

app.listen(PORT, ()=> console.log(`Running on ${PORT}`));
