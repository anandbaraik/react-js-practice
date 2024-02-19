import './App.css'
import Game from './component/Game';
import {COUNTRIES} from "./util/constants";
function App() {
  return (
    <>
      <h1 className='mb-0 pb-0'>
        Word connect
      </h1>
      <small className='mb-3'>(choose pair of Country & its capital)</small>
      <Game countries={COUNTRIES}/>
    </>
  )
}

export default App
