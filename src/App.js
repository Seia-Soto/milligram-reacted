import React from 'react'

import Heading from './components/Typography/Heading'
import Button from './components/Button'

function App () {
  return (
    <div>
      <Heading as='h1'>Say, hello!</Heading>
      <Button as='a'>Never click</Button>
    </div>
  )
}

export default App
