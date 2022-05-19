const route = require('express').Router()

route.get('/testing',(req,res)=>{
    res.send('disini server lagi jalan ');
})

module.exports = route