/* Global Variables */
 let baseURL= 'http://api.openweathermap.org/data/2.5/weather?q=';
 let apiKey='&appid=def5df937bc9d3ecbb89d2dfdfa49ed2';
/* to get value of API from the open weather */
//  add even listener for action from the user
 document.getElementById('generate').addEventListener('click',performAction);
  

function performAction(e){
  const newCity=document.getElementById('zip').value;
  const text=document.getElementById('feelings').value;
  let feel={
      feeling:text
  };
  //calling function fetch API
    getCityWeather(baseURL,newCity,apiKey)
    .then(function(data){
        console.log(data);// here I am getting all data received on console.
        
        postData('/add', {data:data.name , data:data.sys.country , feal:feel.feeling});
        // How to put API data here in curly braces but on service side I am getting undefined
        // please tell me what is wrong.
    })
     .then(updateUI())
    }
        //  define function to fetech api
          const getCityWeather=async(baseURL,newCity,apiKey)=>{
          const res=await fetch(baseURL+newCity+apiKey)
          
          try{
              const data=await res.json();
           //  console.log(data);
              return data;
          }catch(error){
              console.log('error',error);

          }
        
        } 
           
// function fo updateing UI
  const updateUI = async()=>{
      const request=await fetch('/all');
      try{
        const allData= await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML=allData[0].country;
        document.getElementById('date').innerHTML=allData[0].feeling;
      }catch(error){
          console.log('error',error);
      }
  }
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// data for post request
const postData= async (url='',data={})=>{
console.log(data);
const response=await fetch(url, {
    method:'POST',
    credentials:"same-origin",
    headers:{
        'Content-Type': 'application/json',
    },
    //body data type must match 'content-Type' header
    body:JSON.stringify(data),
});
try{
    const newData = await response.json();
    console.log(newData);
    return newData;
}catch(error){
    console.log("error",error);
}
}
/*
postData('/add',{answer:42});
postData('/add',{city:"Islambad",age:60,name:"abbas"});
postData('/animal',{animal:"lion"});
//asyn GET request
const retrieveData=async(url='')=>{
    const request=await fetch(url);
    try{
        //transform into json
        const allData= await request.json();
    }catch(error){
        console.log('error',error);
    }
}
*/