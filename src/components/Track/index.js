/* eslint-disable jsx-a11y/control-has-associated-label */
import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const Track = props => {
  const {trackDetails, getDeletionTrackId} = props
  const {id, duration, genre, imageUrl, name} = trackDetails

  return (
    <li className="list">
      <div className="image-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="button-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          onClick={() => getDeletionTrackId(id)}
          className="button"
          type="button"
        >
          <RiDeleteBin7Line color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default Track
