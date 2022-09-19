const express = require('express');



const app = express()



app.get('/', (req, res) => {
    res.send('this is express server')
})



app.listen(9000, ()=>{
    console.log("applicaton is running")
})