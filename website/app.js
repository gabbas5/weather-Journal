/* Global Variables */
 let baseURL= 'http://api.openweathermap.org/data/2.5/weather?q=';
 let apiKey='&appid=def5df937bc9d3ecbb89d2dfdfa49ed2';
/* to get value of API from the open weather */
//  add even listener for action from the user
 document.getElementById('generate').addEventListener('click',performAction);
function performAction(e){
  const newCity=document.getElementById('zip').value;
    getCityWeather(baseURL,newCity,apiKey)
     
    }
      const getCityWeather=async(baseURL,newCity,apiKey)=>{
          const res=await fetch(baseURL+newCity+apiKey)
          try{
              const data=await res.json();
              console.log(data);
              return data;
          }catch(error){
              console.log('error',error);

          }
      }     
//}
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);
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
postData('/add',{answer:42});
postData('/add',{city:"Islambad",age:60,name:"abbas"});
postData('/animal',{animal:"lion"});
//asyn GET request
const retriveData=async(url='')=>{
    const request=await fetch(url);
    try{
        const allData= await request.json();
    }catch(error){
        console.log('error',error);
    }
}