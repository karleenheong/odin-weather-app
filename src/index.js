/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import './style.css';
import getGifId from './weatherCodes.js';

// Get references
const container = document.querySelector('.container');
const weatherDisplay = document.querySelector('#results');
const toggleTempBtn = document.querySelector('#toggleTemp');
const resultsContainer = document.querySelector('#resultsContainer');
const locationInput = document.querySelector('#location');
const getWeatherBtn = document.querySelector('#getWeatherBtn');
const loader = document.querySelector('.loader');

let currentlyCelsius = true;
let queryLocation = '';

// Get Gif
async function displayGif(gifId) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=gKnDj7gTSSJLIH8DHjOpl6QHRk80I5sj&rating=g`, {mode: 'cors'});
    const gifData = await response.json();
    const link = gifData.data.images.original.url
    container.style.backgroundImage = `url(${link})`;
    // weatherDisplay.append(picture);
  } catch(e) {
    if(e instanceof TypeError) {
      weatherDisplay.textContent = "No images found";
    } else {
      weatherDisplay.textContent = "An error occurred";
    }
  }
}

// DOM functions
function displayWeatherInfo(data) {
  weatherDisplay.style.display = 'block';
  const weatherIntro = document.createElement('div');
  weatherIntro.textContent = `Weather Forecast for ${data.location.name}, ${data.location.country}`;
  weatherIntro.className = 'weatherIntro';

  const currentConditionCode = data.current.condition.code;
  displayGif(getGifId(currentConditionCode))
  const forecastDates = [];
  const forecastTempsC = [];
  const forecastTempsF = [];
  const forecastConditions = [];
  const forecastIcons = [];
  for(let i=0; i<data.forecast.forecastday.length; i++) {
    forecastDates.push(data.forecast.forecastday[i].date);
    forecastTempsC.push(data.forecast.forecastday[i].day.maxtemp_c);
    forecastTempsF.push(data.forecast.forecastday[i].day.maxtemp_f);
    forecastConditions.push(data.forecast.forecastday[i].day.condition.text);
    forecastIcons.push(data.forecast.forecastday[i].day.condition.icon);
  }

  const forecastGrid = document.createElement('div');
  forecastGrid.className = 'forecastGrid';

  for(let i=0; i<forecastDates.length; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'dayDiv';
    const day = document.createElement('div');
    day.textContent = forecastDates[i];
    const temp = document.createElement('div');

    if(currentlyCelsius){
      temp.textContent = `${forecastTempsC[i]}°C`;
    } else {
      temp.textContent = `${forecastTempsF[i]}°F`;
    }

    const condition = document.createElement('div');
    condition.textContent = forecastConditions[i];
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = forecastIcons[i];

    dayDiv.appendChild(day);
    dayDiv.appendChild(temp);
    dayDiv.appendChild(condition);
    dayDiv.appendChild(icon);
    forecastGrid.appendChild(dayDiv);
  }
  
  resultsContainer.appendChild(weatherIntro);
  resultsContainer.appendChild(forecastGrid);
}

async function getWeather(query) {
  const str = `https://api.weatherapi.com/v1/forecast.json?key=44ff13e7bbe642388c5195258240103&q=${query}&days=3&aqi=no&alerts=no`;

  try {
    loader.style.display = 'block';
    const response = await fetch(str, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    console.log(data.location.name.toLowerCase());
    console.log(locationInput.value.toLowerCase());
    if(data.location.name.toLowerCase() !== locationInput.value.toLowerCase()) {
      console.log('not the same location name');
    }
    displayWeatherInfo(data);
    loader.style.display = 'none';
  } catch(e) {
    weatherDisplay.style.display = 'block';
    resultsContainer.textContent = e.message;
    }
}

function clearContainer() {
  while(resultsContainer.firstChild){
    resultsContainer.removeChild(resultsContainer.firstChild);
  }
}

getWeatherBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearContainer();
  if(locationInput.value !== '') {
    queryLocation = locationInput.value;
    getWeather(queryLocation);
  } 
});

toggleTempBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearContainer();
  if(currentlyCelsius) {
    toggleTempBtn.textContent = 'Change to Celsius';
    currentlyCelsius = false;
  } else {
    toggleTempBtn.textContent = 'Change to Fahrenheit'
    currentlyCelsius = true;
  }
  getWeather(queryLocation);
});


weatherDisplay.style.display = 'none';
loader.style.display = 'none';
displayGif('jxsR1JhrmmeUE');




