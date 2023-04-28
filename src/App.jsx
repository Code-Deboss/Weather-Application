import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './styles/App.css'


function App() {
  return (
    <section className='app'>
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
