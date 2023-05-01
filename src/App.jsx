import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './styles/App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [unit, setUnit] = useState('imperial')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=57a626d41d8f3f2f48aace2678eb6439&units=${unit}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const toggleUnit = () => {
    setUnit(unit === 'imperial' ? 'metric' : 'imperial')
  }

  return (
    <section className='app'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
          spellCheck="true"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} {unit === 'imperial' ? '˚F' : '˚C'}</h1> : null}
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].description : null}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <span className='bold'>{data.main ? `${data.main.feels_like} ${unit === 'imperial' ? '˚F' : '˚C'}` : null}</span>
            <p>Dew Point</p>
          </div>
          <div className="humidity">
            <span className='bold'>{data.main ? `${data.main.humidity}%` : null}</span>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <span className='bold'>{data.wind ? `${data.wind.speed} ${unit === 'imperial' ? 'MPH' : 'KPH'}` : null}</span>
            <p>Wind Speed</p>
          </div>
        </div>
        <div className="unit-btn">
          <button onClick={toggleUnit}>
            {unit === 'imperial' ? 'Change to Celsius' : 'Change to Fahrenheit'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
