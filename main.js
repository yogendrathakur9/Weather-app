let form = document.querySelector("form");
let input = document.querySelector("input");



form.addEventListener("submit", getReport);

async function getReport(e) {
  e.preventDefault();
  let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=22af615fe10e4b5593990007221606&q=${input.value}&aqi=yes`);
  let data = await weatherData.json();
  
  let container = document.querySelector(".container-2")
  
  container.style.visibility = "visible";
  
  let inputValue = input.value;
  
  // GET DATA  AND STORE IN VAR
  let temp_cel = data.current.temp_c;
  let temp_far = data.current.temp_f;
  let CityName = data.location.name;
  let icon = data.current.condition.icon;
  let weather_type = data.current.condition.text;

  // SELECT ELEMENT FROM HTML DOCUMENT\
  let City = document.querySelector(".City");
  City.innerHTML = CityName;
  
  
  let celsi = document.querySelector(".temp");
  celsi.innerHTML = temp_cel + "°C";
  
  let fahr = document.querySelector(".fahr");
  fahr.innerHTML = temp_far + "°F";
  console.log(temp_far);
  
  let icon_1 = document.querySelector(".icon");
  icon_1.setAttribute("src", icon);
  
  let day_Type = document.querySelector(".type");
  day_Type.innerHTML = weather_type;
  
  // console.log(dayType);
  form.reset();
}
