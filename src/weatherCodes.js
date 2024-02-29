export function interpretWeatherCode(code) {
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

export function getSearchTerm(code) {
  let gifId;
  switch(+code) {
    case 0:
      gifId = '3oz8xwT20ApeHadTlS';
      break;
    case 1:
    case 2:
    case 3:
      gifId = '3oz8xsTTDHL2D8Hluw';
      break;
    case 45:
    case 48:
      gifId = 'xT9GEpwYcYtwrqjdQc';
      break;
    case 51:
    case 53:
    case 55: 
    case 56:
    case 57:
      gifId = 'xT9GEOg09OuResnZ6g';
      break;
    case 61:
    case 63:
    case 65: 
    case 66:
    case 67:
      gifId = 'dI3D3BWfDub0Q';
      break;
    case 71:
    case 73:
    case 75:
    case 77:
      gifId = 'N7ZiLbtDr84Yo';
      break;
    case 80:
    case 81:
    case 82:
      gifId = 'UbocuGUmAAHDTOQAiH';
      break;
    case 85:
    case 86:
      gifId = 'SuG4g3wrhnM0KfBA48';
      break;
    case 95:
      gifId = 'NWFgmiGdF4rGo';
      break;
    case 96:
    case 99:
      gifId = 'A2G7aB3n0ybao';
      break;
    default:
      gifId = '8L0Pky6C83SzkzU55a';
  }
  return gifId;
}