import React from 'react'

const Child = ({name}) => {
    if(name === 'Anandi') {
        throw new Error('Provide right data');
    }
  return (
    <h1>{name}</h1>
  )
}

export default Child