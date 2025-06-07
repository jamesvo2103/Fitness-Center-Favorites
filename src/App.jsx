import React, { Component } from 'react'
import './App.css'
import GymGrid from './components/GymGrid'

class App extends Component {
  render() {
    return (
      <div className="app-bg">
        <h1 className="main-title">Fitness Center Favorites</h1>
        <GymGrid />
      </div>
    )
  }
}

export default App
