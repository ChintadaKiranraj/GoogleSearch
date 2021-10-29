// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  inputEntered = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredList = (suggestionsList, searchInput) =>
    suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

  getClickedOne = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredList = this.getFilteredList(suggestionsList, searchInput)
    return (
      <div className="mainContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          width="15%"
          alt="google logo"
        />
        <div className="searchAndlistContainer">
          <div className="searchImgandSerchbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchImag"
            />
            <input
              value={searchInput}
              type="search"
              onChange={this.inputEntered}
              className="searchBar"
            />
          </div>

          <ul className="listcontainer">
            {filteredList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                getClickedOne={this.getClickedOne}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
