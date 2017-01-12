import axios from 'axios';

import API_KEY from '../../key';

const APIKEY = API_KEY.weatherkey;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const req = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
