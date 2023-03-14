import Clouds from '../assets/Clouds.svg'
import Location from '../assets/icons/Location.svg'
import Wind from '../assets/icons/Wind.svg'
import Weather from '../assets/icons/Weather.svg'
import Rain from '../assets/icons/Rain.svg'
import './Cardmain.scss'

import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Cardmain() {
  
    const [weather, setWeather] = useState({})

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Aracaju,SE,BR&units=metric&appid=533b19c7fe486a5c15ebcc2db87a3368'
        )
        setWeather(response.data)
      }
      fetchData()
    })
    
  return(
    <div className="card-main">
      <img className='clouds' src={Clouds} alt="" />
      <header>
        <img src={Location} alt="" />
        <h1> {weather.name}, SE</h1>
      </header>
      <section>
      <div className="temp">
        <h2>{weather.main?.temp.toFixed(0)}</h2>
        <h4>°C</h4>
      </div>
      <div className="min-max">
        <h3>{weather.main?.temp_max.toFixed(0)}°</h3>
        <span>{weather.main?.temp_min.toFixed(0)}°</span>
      </div>
      </section>

      <footer>
        <div className="wind">
          <img src={Wind} alt="" />
          <div className="status">
            Vento
            <h3><span>{weather.wind?.speed.toFixed(0)}</span> km/h</h3>
          </div>
        </div>
        <div className="weather">
          <img src={Weather} alt="" />
          <div className="status">
            Umidade
            <h3><span>{weather.main?.humidity.toFixed(0)}</span> %</h3>
          </div>
        </div>
        <div className="rain">
        <img src={Rain} alt="" />
          <div className="status">
          Chuva
          <h3><span>10</span> %</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}