import './App.css'
import Game from './component/Game';
import {COUNTRIES} from "./util/constants";
function App() {
  return (
    <>
      <Game countries={COUNTRIES}/>
    </>
  )
}

export default App
