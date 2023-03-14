import Leaf from '../assets/icons/top1/leaf.svg'
import './Cardtop1.scss'

export default function Cardtop1() {
  return(
    <div className="card-top1">
      <header>
        <img src={Leaf} alt="" />
        <h1>Qualidade do ar</h1>
      </header>
      <section>
        <span>Boa</span>
        <h2>21</h2>
      </section>
      <footer>
        <ul>
          <li>
            <span>12.9</span>
            <p>PM2.5</p>
          </li>
          <li>
            <span>12.9</span>
            <p>PM10</p>
          </li>
          <li>
            <span>2.1</span>
            <p>SO</p>
          </li>
          <li>
            <span>1.4</span>
            <p>NO</p>
          </li>
          <li>
            <span>21.2</span>
            <p>O</p>
          </li>
          <li>
            <span>0.7</span>
            <p>CO</p>
          </li>
        </ul>
      </footer>
    </div>
  )
}