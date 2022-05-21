const express = require('express')
const app = express()
const port = 3000
const route = require('./route')

app.use(route)

app.listen(port , ()=> {
    console.log(`server running on ${port}`);
})