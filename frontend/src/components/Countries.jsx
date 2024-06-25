const Countries = ({ countries, onClick }) => {
  return countries.map(country => (
    <div key={country.cca2}>
      <p>{country.name.common} <button onClick={() => onClick(country.cca2)}>show</button></p>
    </div>
  ))
}

export default Countries
