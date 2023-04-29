import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './styles/App.css'


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=57a626d41d8f3f2f48aace2678eb6439"

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <section className='app'>
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Lagos</p>
          </div>
          <div className="temp">
            <h1>60˚F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <span className='bold'>55˚F</span>
            <p>Dew Point</p>
          </div>
          <div className="humidity">
            <span className='bold'>20%</span>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <span className='bold'>12MPH</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
