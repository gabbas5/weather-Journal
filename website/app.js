/* Global Variables */
//let baseURL= 'http://api.openweathermap.org/data/2.5/weather?q=';
//let apiKey='&appid=def5df937bc9d3ecbb89d2dfdfa49ed2';
/* to get value of API from the open weather */
//document.getElementById('generate').addEventListener('click',performAction);
//function performAction(e){
//  const newCity=document.getElementById('zip').value;
//     getCityWeather(baseURL,newCity,apiKey)
 //   .then(function(data){
 //       console.log(data);
 //     postData('/add',{data}); 
 //    })
          
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