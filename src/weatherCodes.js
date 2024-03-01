export default function getGifID(code) {
  let gifId;
  switch(+code) {
    case 1000: // sunny
      gifId = 'o7R0zQ62m8Nk4';
      break;
    case 1003: // partly cloudy
      gifId = '3o6wrm1JXSq5C9EtnG';
      break;
    case 1006: // cloudy
      gifId = 'lOkbL3MJnEtHi';
      break;
    case 1009: // overcast
      gifId = '3o7rc6sa2RvKo8K5EI';
      break;
    case 1030: // mist
      gifId = 'sZmv85pZ8NG60HU9QK';
      break;
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1240:
    case 1243:
    case 1246:
    case 1063: // rain
      gifId = 'PbOaO2fedzQLm';
      break;
    case 1114:
    case 1117:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1255:
    case 1258:
    case 1066: // snow
      gifId = '12wteMTXxjLaVO';
      break;
    case 1204:
    case 1207:
    case 1249:
    case 1252:
    case 1069: // sleet
      gifId = 'akkrYRhxs8BKE';
      break;
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1072: // drizzle
      gifId = 'xT9GEOg09OuResnZ6g';
      break;
    case 1147:
    case 1035: // fog
      gifId = 'ZWRCWdUymIGNW';
      break;
    case 1261:
    case 1264:
    case 1237: // hail
      gifId = 'YMPVlSoVQDJGU';
      break;
    case 1087:
    case 1276:
    case 1279:
    case 1282:
    case 1273: // thunder
      gifId = '3o6gDYJBQLIHFZoWL6';
      break;
    default:
      gifId = '8L0Pky6C83SzkzU55a';
  }
  return gifId;
}