import React from 'react'

import Heading from './components/Typography/Heading'
import Button from './components/Button'
import List from './components/List'

function App () {
  return (
    <div>
      <Heading as='h1'>Say, hello!</Heading>
      <Button as='a'>Never click</Button>
      <List description>
        <List.Item descriptionHeader>
          This is description header:
        </List.Item>
        <List.Item description>
          This is sub node of description header.
        </List.Item>
      </List>
    </div>
  )
}

export default App
