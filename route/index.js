const route = require('express').Router()
const user = require('./User')

route.use('/user', user)

route.get('/',(req,res)=>{
    res.send('disini server lagi jalan ');
})

module.exports = route