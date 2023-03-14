import Cloudy from '../assets/icons/down/cloudy.svg'
import Sun from '../assets/icons/down/sun.svg'
import Ray from '../assets/icons/down/ray.svg'
import Sunny from '../assets/icons/down/sunny.svg'
import Rain from '../assets/icons/down/rain.svg'

import './Carddown.scss'

export default function Carddown() {
  return(
    <div className='card-down'>
      <div className="tomorrow day">
        <h2>Amanhã</h2>
        <img src={Cloudy} alt="" />
        <div>
          <h4>21°</h4><span>16°</span>
        </div>
      </div>
      <div className="friday day">
        <h2>Sexta-Feira</h2>
        <img src={Sun} alt="" />
        <div>
          <h4>28°</h4><span>20°</span>
        </div>
      </div>
      <div className="saturday day">
        <h2>Sábado</h2>
        <img src={Rain} alt="" />
        <div>
          <h4>25°</h4><span>21°</span>
        </div>
      </div>
      <div className="sunday day">
        <h2>Domingo</h2>
        <img src={Ray} alt="" />
        <div>
          <h4>20°</h4><span>14°</span>
        </div>
      </div>
      <div className="monday day">
        <h2>Segunda-Feira</h2>
        <img src={Sunny} alt="" />
        <div>

        
        <h4>24°</h4><span>18°</span>
        </div>
      </div>
    </div>
  )
}