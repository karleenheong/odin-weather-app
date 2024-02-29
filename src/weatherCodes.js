export default function interpretWeatherCode(code) {
  let interpretation;
  switch(+code) {
    case 0:
      interpretation = 'Clear sky';
      break;
    case 1:
    case 2:
    case 3:
      interpretation = 'Mainly clear, partly cloudy, and overcast';
      break;
    case 45:
    case 48:
      interpretation = 'Fog and depositing rime fog';
      break;
    case 51:
    case 53:
    case 55: 
      interpretation = 'Drizzle: Light, moderate, and dense intensity';
      break;
    case 56:
    case 57:
      interpretation = 'Freezing Drizzle: Light and dense intensity';
      break;
    case 61:
    case 63:
    case 65: 
      interpretation = 'Rain: Slight, moderate and heavy intensity';
      break;
    case 66:
    case 67:
      interpretation = 'Freezing Rain: Light and heavy intensity';
      break;
    case 71:
    case 73:
    case 75:
      interpretation = 'Snow fall: Slight, moderate, and heavy intensity';
      break;
    case 77:
      interpretation = 'Snow grains';
      break;
    case 80:
    case 81:
    case 82:
      interpretation = 'Rain showers: Slight, moderate, and violent';
      break;
    case 85:
    case 86:
      interpretation = 'Snow showers slight and heavy';
      break;
    case 95:
      interpretation = 'Thunderstorm: Slight or moderate';
      break;
    case 96:
    case 99:
      interpretation = 'Thunderstorm with slight and heavy hail';
      break;
    default:
      interpretation = 'Interpretation failed';
  }
  return interpretation;
}