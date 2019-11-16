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





var fs = require('fs');
var path = require('path');

function base64ToPNG(data) {
  data = data.replace(/^data:image\/png;base64,/, '');

  fs.writeFile(path.resolve(__dirname, '../tmp/image.png'), data, 'base64', function(err) {
    if (err) throw err;
  });
}

module.exports = base64ToPNG;