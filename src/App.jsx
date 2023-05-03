import React, { useState } from "react";
import axios from "axios";
import "./sass/App.scss";


function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  const API_KEY = "57a626d41d8f3f2f48aace2678eb6439";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setQuery("");
    }
  };

  const calculateDewPoint = (temperature, humidity) => {
    const a = 17.27;
    const b = 237.7;
    const alpha = (a * temperature) / (b + temperature) + Math.log(humidity / 100.0);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint.toFixed(1);
  };

  return (
    <section className="app">
      <div className="search">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
          spellCheck="true"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              {data.name}, {data.sys ? data.sys.country : ""}
            </p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>{(data.main.temp - 273.15).toFixed(1)}˚C</h1>
            ) : null}
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].description : ""}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <span className="bold">
              {data.main
                ? calculateDewPoint(
                  data.main.temp - 273.15,
                  data.main.humidity
                ) + "˚C"
                : ""}
            </span>
            <p>Dew Point</p>
          </div>
          <div className="humidity">
            <span className="bold">
              {data.main ? data.main.humidity : ""}%
            </span>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <span className="bold">
              {data.wind ? data.wind.speed : ""}m/s
            </span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
     
    </section>
    
  );
}

export default App;
