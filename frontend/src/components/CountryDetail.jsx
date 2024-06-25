import { useState, useEffect } from 'react'
import weatherService from '../services/weathers'

const CountryDetail = ({ country }) => {
  const [ weather, setWeather ] = useState(null)

  useEffect(() => {
    weatherService
      .getOne(country.latlng[0], country.latlng[1])
      .then(weather => {
        console.log(weather)
        setWeather(weather)
      })
  }, [])

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>
        capital {country.capital}
      </p>
      <p>
        area {country.area}
      </p>
      <h2>languages:</h2>
      <ul>
        {
          Object.entries(country.languages).map(([k, v], i) => (
            <li key={k}>{v}</li>
          ))
        }
      </ul>
      {
        <img alt="" src={Object.entries(country.flags).filter(([k, v], i) => k === 'png')[0][1]} width={100} />
      }
      <h2>Weather in {country.name.common}</h2>
      {
        weather && (
          <>
            <p>
              temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius
            </p>
            <img alt="" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>
              wind {weather.wind.speed} m/s
            </p>
          </>
        )
      }
    </>
  )
}

export default CountryDetail
