import './style.css';

function processData(data) {
  console.log(data.daily.temperature_2m_max);
}

async function getWeather(lat, long) {
  const str = `https://api.open-meteo.com/v1/forecast?latitude=${+lat}&longitude=${+long}&daily=temperature_2m_max&timezone=auto&forecast_days=3`;
  try {
    const response = await fetch(str, {mode: 'cors'});
    const data = await response.json();
    // process json data
    processData(data);
  } catch(e) {
    console.error(e.message);
  }
}

getWeather(35.21, 129.0689);
// function component() {
//   const element = document.createElement('div');

//   element.textContent = 'HELLO BITCH';
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());
