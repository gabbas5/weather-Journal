// Setup empty JS object to act as endpoint for all routes
const appData=[];
 // Require Express to run server and routes
  const express=require('express');
// Start up an instance of app
    const app = express();
    /* Middleware*/
    const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance and its use
const cors= require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

  // set port for server
  const port=3000;
  // Setup Server
  const server=app.listen(port,listening);
  // call back to debuging
   function listening(){
      console.log('server running');
      console.log(`running on localhost:${port}`);
  }
   //get route
  // app.get('/',function(req,res){
   //   res.send('Hello World');
  // });
  
  
   app.post('/add',addData);
   function addData(req,res){
     console.log(req.body);
    let newEntry={
       data:req.body
      }
       appData.push(newEntry)
       res.send(appData);
       console.log(appData)
        
   }
    // another get route
    app.get('/all',function(req,res){
      res.send(appData);
      console.log(appData);
    });
  