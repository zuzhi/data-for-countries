import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getOne = (lat, lon) => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
  const url = `${baseUrl}?appid=${apiKey}&lat=${lat}&lon=${lon}`
  const request = axios.get(url)
  return request.then(response => response.data)
}

export default { getOne }
