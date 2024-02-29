/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// Weather API - open-meteo.com
import './style.css';
import { interpretWeatherCode, getSearchTerm } from './weatherCodes.js';

// Get references
const weatherDisplay = document.querySelector('#results');
// const toggleTempBtn = document.querySelector('#toggleTemp');
const resultsContainer = document.querySelector('#resultsContainer');
const latitudeInput = document.querySelector('#latitude');
const longitudeInput = document.querySelector('#longitude');
const getWeatherBtn = document.querySelector('#getWeatherBtn');

const gifs = [];

// Get Gif
async function getGif(gifId, index) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=gKnDj7gTSSJLIH8DHjOpl6QHRk80I5sj&rating=g`, {mode: 'cors'});
    const gifData = await response.json();
    gifs[index].src = gifData.data.images.original.url;
  } catch(e) {
    if(e instanceof TypeError) {
      weatherDisplay.textContent = "No images found";
      console.error("No images found");
    } else {
      weatherDisplay.textContent = "An error occurred";
      console.error(e.message);
    }
  }
}

// DOM functions
function displayWeatherInfo(data) {
  weatherDisplay.style.display = 'block';
  const weatherIntro = document.createElement('div');
  weatherIntro.textContent = `Welcome to the Weather Forecast for Latitude ${latitudeInput.value} and Longitude ${longitudeInput.value}`;

  // Forecast array
  const forecastGrid = document.createElement('div');
  const weatherCodes = data.daily.weather_code;
  const temps = data.daily.temperature_2m_max;

  for(let i=0; i<weatherCodes.length; i++) {
    const day = document.createElement('div');
    if(i === 0){
      day.textContent = 'Today';
    } else if(i === 1) {
      day.textContent = `In ${i} day`
    } else {
      day.textContent = `In ${i} days`;
    }
    
    const temp = document.createElement('div');
    temp.textContent = `${temps[i]} degrees`;
    const weatherDescrip = document.createElement('div');
    weatherDescrip.textContent = interpretWeatherCode(weatherCodes[i]);

    const picture = document.createElement('img');
    gifs.push(picture);
    getGif(getSearchTerm(weatherCodes[i]), i);
  
    forecastGrid.appendChild(day);
    forecastGrid.appendChild(temp);
    forecastGrid.appendChild(weatherDescrip);
    forecastGrid.appendChild(gifs[i]);
    
  }
  resultsContainer.appendChild(weatherIntro);
  resultsContainer.appendChild(forecastGrid);
}

// Call the API
async function getWeather(lat, long) {
  const str = `https://api.open-meteo.com/v1/forecast?latitude=${+lat}&longitude=${+long}&daily=weather_code,temperature_2m_max&timezone=auto`;
  try {
    const response = await fetch(str, {mode: 'cors'});
    const data = await response.json();
    displayWeatherInfo(data);
  } catch(e) {
    weatherDisplay.style.display = 'block';
    weatherDisplay.textContent = e.message;
  }
}

getWeatherBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(latitudeInput.value, longitudeInput.value);
})

weatherDisplay.style.display = 'none';
