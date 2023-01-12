import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})

  function Button(props) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.value}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

    const getWeather = event => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    };

    return (
      <button className="button" onClick={getWeather} value = {props.value} > 
        {props.value} 
      </button>
    );
  }
  
  

  return (
    <div className="app">
      <div className="search">
        <Button value="Palencia"></Button>
        <Button value="Maribor"></Button>
      </div>
      <div className="container2">
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed() * 3.6} M/S</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
