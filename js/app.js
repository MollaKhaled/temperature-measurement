const API_KEY =`339984ececca8a2ca65e6acf12b655a4`;

const loadTemperature = async(city )=> {
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const res = await fetch(url);
  const data= await res.json();
  displayTemperature(data);
}
 const displayTemperature = data => {
  const temperature = document.getElementById('temperature');
  console.log(data.name);
  temperature.innerText=data.main.temp;
  const cloud = document.getElementById('cloud');
   cloud.innerText = data.weather[0].main;
   const cityName = document.getElementById('city');
   cityName.innerText=data.name;
 }
 document.getElementById('search-btn').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const city = searchField.value;
  loadTemperature(city);
 })
loadTemperature('dhaka');