import './App.scss'
import Carddown from './components/Carddown'
import Cardmain from './components/Cardmain'
import Cardtop1 from './components/Cardtop1'
import Cardtop2 from './components/Cardtop2'

export default function App() {
  return (
    <div className="App">
      <Cardmain/>
      <Carddown/>
      <Cardtop1/>
      <Cardtop2/>
    </div>
  )
}

