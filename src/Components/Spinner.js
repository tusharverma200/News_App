import React, { Component } from 'react'
import giphy from './giphy.webp'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={giphy} alt="loading" />
      </div>
    )
  }
}
