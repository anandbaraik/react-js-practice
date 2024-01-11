import './App.css'
import TrafficLight from './components/TrafficLight'
function App() {
    const trafficLights = [
        {
            color: 'red',
            duration: 4000,
            next: 'green',
        },
        {
            color: 'yellow',
            duration: 500,
            next: 'red',
        },
        {
            color: 'green',
            duration: 3000,
            next: 'yellow',
        }
    ];
  return (
    <>
      <TrafficLight trafficLights={trafficLights}/>
    </>
  )
}

export default App
