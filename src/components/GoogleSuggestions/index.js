// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputFind = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateInput = props => {
    this.setState({
      searchInput: props,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionList} = this.props
    const findValue = suggestionList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google-logo"
            className="google-card"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon-card"
              />
              <input
                placeholder="Search Google"
                className="search-input"
                type="search"
                value={searchInput}
                onChange={this.onInputFind}
              />
              <ul className="suggestion-card">
                {findValue.map(eachItem => (
                  <SuggestionItem
                    searchResults={eachItem}
                    key={eachItem.id}
                    updateInput={this.updateInput}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
