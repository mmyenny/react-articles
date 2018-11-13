import React, { Component } from 'react'

import Article from './Article'

class Main extends Component {
  render() {
    let titles = ['Mmmm Bacon', 'We are hungry', 'Taco tuesday']

    return (
      <main>
        {titles.map(string => (
          <Article title={string} />
        ))}
      </main>
    )
  }
}

export default Main
