import React from 'react'
import './SearchBox.scss'

class SearchBox extends React.Component {
  state = {
    searchString: ''
  }
  render(){
    const {placeholder, handleChange} = this.props
    return (
      <div className="search-box">
        <input type="search" placeholder={placeholder} onChange={handleChange}/>
      </div>
    )
  }
}

export default SearchBox