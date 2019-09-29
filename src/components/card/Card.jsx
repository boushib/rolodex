import React from 'react'

import './Card.scss'

const Card = ({monster}) => {
  return (
    <div className="card">
      <h3>{monster.name}</h3>
      <img src={`https://robohash.org/${monster.id}?size=140x140`} alt=""/>
    </div>
  )
}

export default Card