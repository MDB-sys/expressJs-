const route = require('express').Router()

route.get('/', (req,res,next)=>{
    res.send('disni user')
})

module.exports = route