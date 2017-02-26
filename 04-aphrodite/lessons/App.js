import React, { Component } from 'react'
import pkg from './package.json'
import { Button } from './Button/Button'
import '../../public/lessons/css/main.css'

export default class App extends Component {
  render () {
    return (
      <main>
        <p>{pkg.description}</p>
        <Button>Button</Button>
      </main>
    )
  }
}
