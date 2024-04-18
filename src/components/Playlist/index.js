import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import Banner from '../Banner'
import Track from '../Track'
import './index.css'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {tracksList: props.initialTracksList, inputValue: ''}
  }

  getDeletionTrackId = id => {
    const {tracksList} = this.state
    const filteredTrackList = tracksList.filter(
      eachTrack => eachTrack.id !== id,
    )
    this.setState({tracksList: filteredTrackList})
  }

  renderInputSection = () => {
    const {inputValue} = this.state

    return (
      <div className="heading-input-container">
        <h1 className="heading">Songs Playlist</h1>
        <div className="input-container">
          <input
            onChange={e => this.setState({inputValue: e.target.value})}
            placeholder="Search"
            type="search"
            value={inputValue}
          />
          <IoIosSearch color="#ffffff" />
        </div>
      </div>
    )
  }

  renderPlaylist = () => {
    const {tracksList, inputValue} = this.state

    const filteredTrackList = tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return filteredTrackList.length === 0 ? (
      <div className="no-text-container">
        <p className="no-text">No Songs Found</p>
      </div>
    ) : (
      <ul className="list-container">
        {filteredTrackList.map(eachTrack => (
          <Track
            getDeletionTrackId={this.getDeletionTrackId}
            key={eachTrack.id}
            trackDetails={eachTrack}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <Banner />
        <div className="playlist-container">
          {this.renderInputSection()}
          {this.renderPlaylist()}
        </div>
      </>
    )
  }
}

export default Playlist
