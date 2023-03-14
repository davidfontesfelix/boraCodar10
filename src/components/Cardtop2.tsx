import Time from '../assets/icons/top2/time.svg'
import Ellipse from '../assets/icons/top2/ellipse.svg'
import Ellipsefill from '../assets/icons/top2/ellipsefill.svg'

import './Cardtop2.scss'


export default function Cardtop2() {

 let now = new Date()

 let hour = now.getHours()
 let minutes = now.getMinutes()
  return(
    <div className="card-top2">
        <header>
          <img src={Time} alt="" />
          <h1>Horário do sol</h1>
        </header>
        <section>
          <img src={Ellipse} alt="" />
          <img className='fill' src={Ellipsefill} alt="" />
          <h3>{`${hour}:${minutes}`}</h3>
        </section>
        <footer>
          <h4>06:12</h4>
          <h4>18:52</h4>
        </footer>
    </div>
  )
}