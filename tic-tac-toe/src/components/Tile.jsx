import React from 'react'
export const Tile = ({value}) => {
  const onClick = () => {

  }
  return (
    <div onClick={onClick} className={`tile `}>
      {value}
    </div>
  )
}
