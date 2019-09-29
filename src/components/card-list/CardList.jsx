import React from 'react'

import Card from '../card/Card'

import './CardList.scss'

const CardList = props => {
  const {monsters} = props
  return (
    <div className="card-list">
      <div className="container">
        <div className="grid">
          { monsters.map(monster => <Card monster={monster} key={monster.id} />) }
        </div>
      </div>
    </div>
  )
}

export default CardList