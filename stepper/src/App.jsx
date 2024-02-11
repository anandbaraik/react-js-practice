import './App.css'
import Stepper from './components/Stepper'
import { CHECKOUT_STEPS } from './util/constants'

function App() {
  return (
   <>
   	<h1>Checkout</h1>
		<Stepper stepsConfig={CHECKOUT_STEPS}/>
   </>
  )
}

export default App
