import DBAccess.js;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 5000;
//Mostly just fot testing, nothing important

app.get('/', (req, res) => {
    res.json({
        message: 'Congrats, it is working'
    });
})

//get cart script
app.listen(PORT, () => {
    console.log('server working on ' + PORT);
})

app.post('/img', (req, res) => {
    res.json({
        message: "its getting the data"
    });
    //upload response
    console.log('request body' + (req.body));
    console.log('request body' + (typeof(req)));
})