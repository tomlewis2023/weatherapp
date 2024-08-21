//Weather for home town

// const disPlace = document.getElementById("place");
// const distemp = document.getElementById("temp");
// const dishumd = document.getElementById("humd");
// const disdisc = document.getElementById("desc");
// const disimg = document.getElementById("img");

// async function getweather() {
//   const response = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=10.1004&lon=76.3570&appid=2f9f315b2018164e5e5e55dc861bab9f&units=metric"
//   );
//   const data = await response.json();

//   console.log(data);
//   disPlace.innerText = data.name;
//   distemp.innerText = `Temp ${data.main.temp} °C`;
//   dishumd.innerText = `Humidity ${data.main.humidity} %`;
//   disdisc.innerText = data.weather[0].description;

//   const iconCode = data.weather[0].icon;
//   const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
//   disimg.setAttribute("src", iconUrl);
// }

//weather for city

const disPlace_1 = document.getElementById("place_1");
const distemp_1 = document.getElementById("temp_1");
const dishumd_1 = document.getElementById("humd_1");
const disdisc_1 = document.getElementById("desc_1");
const disimg_1 = document.getElementById("img_1");
const city_name = document.getElementById("city");
const date_1 = document.getElementById("date");

console.log(iconurl);
async function getweathercity() {
  const city = city_name.value;
  const iconurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f9f315b2018164e5e5e55dc861bab9f&units=metric`;
  

  
  const res = await fetch(iconurl);
  const data = await res.json();
  console.log(data.timezone);
  disPlace_1.innerText = `${data.name} (${data.sys.country})` ;
  distemp_1.innerText = `Temp ${data.main.temp} °C`;
  dishumd_1.innerText = `Humidity ${data.main.humidity} %`;
  disdisc_1.innerText = data.weather[0].description;
  date_1.innerText = new Date()

  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  disimg_1.setAttribute("src", iconUrl);
}
