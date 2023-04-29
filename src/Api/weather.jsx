import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=57a626d41d8f3f2f48aace2678eb6439"

    const searchLocation = (event) => {
        if(event.key === 'Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        }
    }

  return (
   <div>
    
   </div>
  )
}

export default Weather