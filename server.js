// Setup empty JS object to act as endpoint for all routes
//projectData = {name:'abbas',city:'Islamabad',age:60,family:['naish','Tashfa','naimah'],car:{type1:'toyota',type2:'acquva'}};
let appJSON = '{"coord":{"lon":73.1338,"lat":33.7104},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":288.71,"feels_like":286.85,"temp_min":288.71,"temp_max":288.71,"pressure":1014,"humidity":66},"visibility":10000,"wind":{"speed":2.43,"deg":35},"clouds":{"all":0},"dt":1613412613,"sys":{"type":3,"id":2007435,"country":"PK","sunrise":1613353927,"sunset":1613393481},"timezone":18000,"id":1162015,"name":"Islamabad","cod":200}';
 let appData=JSON.parse(appJSON);  
 
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
  const port=8000;
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
   // another get route
   app.get('/all',function(req,res){
     res.send(appData);
    // console.log(appData.sys.country);
    // console.log(appData.name);
   });
   const data=[];
   app.post('/add',addMovie);
   function addMovie(req,res){
      // console.log(req.body);
       data.push(req.body);
       console.log(data);
      
   }