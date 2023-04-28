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
            <span>60˚F</span>
          </div>
          <div className="humidity">
            <span>20%</span>
          </div>
          <div className="wind">
            <span>12MPH</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
