const query = "London";

const apiKey = "";

const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

const city = document.getElementById("city");
const send = document.getElementById("send");

// const weather = document.getElementById("weather");
// const weatherImage = document.getElementById("weatherImage");
let weather = null;
let weatherImage = null;



const response = async (url) => {
  const res = await fetch(url);
  const val = await res.json();
  return val;
}

window.onload = async () => {
  const res = await response(url);
  const icon = res.weather[0].icon;

  const addEl = document.createElement("div");
  addEl.id = "weather";
  const addText =`${query} is ${res.weather[0].description}. Temp is ${res.main.temp}`
  const addElText = document.createTextNode(addText);
  addEl.appendChild(addElText);
  document.body.appendChild(addEl);

  const addElImage = document.createElement("img");
  addElImage.id = "weatherImage";
  addElImage.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  document.body.appendChild(addElImage);

  weather = document.getElementById("weather");
  weatherImage = document.getElementById("weatherImage");

}

send.addEventListener("click", async () => {
  console.log(weather)
  console.log(weatherImage)
  
  const query = city.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
  const res = await response(url);
  const icon = res.weather[0].icon;
  weather.innerHTML = `${query} is ${res.weather[0].description}. Temp is ${res.main.temp}`;
  weatherImage.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
});



