
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

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




app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
   limit: '50mb',
   extended: true
}));

app.post('/img', (req, res) => {
    // console.log(typeof(req.body.name));
    // console.log(req.body.name);
    res.json({
        message: "its getting the data"
    });
    const base64data=req.body.name;
    // console.log(base64data);
base64ToPNG(base64data);
    // console.log(req.body.data);

    // console.log(typeof(req));
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

    // console.log(data);
    // console.log(__dirname);
  fs.writeFile(path.resolve('/ISeeU', '../tmp/image.png'), data, 'base64', function(err) {

  fs.writeFile(path.resolve(__dirname, '../tmp/image.png'), data, 'base64', function(err) {

    if (err) throw err;
  });
}


module.exports = base64ToPNG;


function runPython()
{
  const { spawn } = require('child_process')

  const logOutput = (name) => (data) => console.log(`[${name}] ${data.toString()}`)
  
  function run() {
    const process = spawn('python', ['./ISeeU/Compare.py', "christian_web_2.png", "christian_web.jpg"]);
  
    process.stdout.on(
      'data',
      logOutput('stdout')
    ); 
  
    process.stderr.on(
      'data',
      logOutput('stderr')
    );
  }
  
  (() => {
    try {
      run()
      // process.exit(0)
    } catch (e) {
      console.error(e.stack);
      process.exit(1);
    }
  })();

  // csv().fromFile('./Suggestions.csv').then((jsonObj)=>{ console.log(jsonObj); 
  // })

  //  const jsonArray=await csv().fromFile('./Suggestions.csv');
}
runPython()

module.exports = base64ToPNG;

