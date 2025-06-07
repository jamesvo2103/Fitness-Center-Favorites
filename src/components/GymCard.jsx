import React from 'react'

const GymCard = ({ gym }) => (
  <div className="gym-card">
    <img src={gym.image} alt={gym.name} className="gym-img" />
    <div className="gym-info">
      <h2>{gym.name}</h2>
      <p className="gym-type">{gym.name}</p>
      <p><b>Locations:</b> {gym.locations}</p>
      <p><b>States:</b> {gym.states}</p>
      <p><b>Cities:</b> {gym.cities}</p>
      <a href={gym.website} target="_blank" rel="noopener noreferrer">
        <button className="view-btn">Visit Website</button>
      </a>
    </div>
  </div>
)

export default GymCard