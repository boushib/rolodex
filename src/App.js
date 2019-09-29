import React from 'react'
import api from './axios'
import './App.scss'

import SearchBox from './components/search-box/SearchBox'
import CardList from './components/card-list/CardList'

class App extends React.Component {
  state = {
    searchField: '',
    monsters: []
  }
  filterMonsters = (e) => {
    this.setState({searchField:  e.target.value})
  }
  render(){
    const {searchField, monsters} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters.." handleChange={this.filterMonsters}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
  async componentDidMount(){
    const res = await api.get('/users')
    const monsters = res.data
    this.setState({monsters})
  }
}

export default App
