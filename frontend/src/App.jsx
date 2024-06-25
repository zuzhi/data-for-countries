import { useState, useEffect } from 'react'
import countryService from './services/countries'

import CountryDetail from './components/CountryDetail'
import Countries from './components/Countries'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filtered, setFiltered ] = useState([])
  const [ q, setQ ] = useState("")

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        console.log(countries.length)
        setCountries(countries)
    setFiltered(countries.filter(country => country.name.common.toLowerCase().indexOf(q.toLowerCase()) >= 0))
      })
  }, [])

  const handleFilter = (event) => {
    const q = event.target.value
    setQ(q)
    setFiltered(countries.filter(country => country.name.common.toLowerCase().indexOf(q.toLowerCase()) >= 0))
  }

  const handleShow = (cca2) => {
    console.log(cca2)
    setFiltered(countries.filter(country => country.cca2 === cca2))
  }

  return (
    <>
      <span>find countries </span>
      <input type='text' value={q} onChange={handleFilter} />
      {
        filtered.length > 10
          ? <p>Too many matches, specify another filter</p>
          : filtered.length > 1
            ? <Countries countries={filtered} onClick={handleShow} />
            : filtered.map(country => (
              <CountryDetail key={country.cca2} country={country} />
            ))
      }
    </>
  )
}

export default App
