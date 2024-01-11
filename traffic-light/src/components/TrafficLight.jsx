import React, { useEffect, useState } from 'react'
import { Light } from './Light';
const TrafficLight = ({trafficLights}) => {

    const [activeSignal, setActiveSignal] = useState('green');

    const light = trafficLights.find((trafficLight) => trafficLight.color === activeSignal);

    useEffect(() => {

        let timerId = setTimeout(() => {
            setActiveSignal(light.next);
        }, light.duration);

        return () => clearTimeout(timerId);
    }, [light]);

  return (
    <div className='traffic-light-container'>
        {
            trafficLights?.map((signal) => (
                <Light
                    key={signal.color}
                    backgroundColor={activeSignal === signal.color ? activeSignal : undefined}
                />
            ))
        }
    </div>
  )
}

export default TrafficLight