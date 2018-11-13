import React, { Component } from 'react'

import Article from './Article'

class Main extends Component {
  render() {
    let titles = ['Foo', 'A', 'B', 'C', 'D']

    return (
      <main>
        {/* <Article title="A" />
        <Article title="B" />
        <Article title="C" />
        <Article title="D" /> */}

        {titles.map(string => (
          <Article title={string} />
        ))}
      </main>
    )
  }
}

export default Main
