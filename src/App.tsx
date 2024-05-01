import React from 'react'
import Inspect from 'inspx'
import Text from './components/Text'
import Button from './components/Button'
import Icon from './components/Icons'
const App = () => {
  return (
    <div className="bg-aquamarine">
      <Inspect>
          <Text variant="heading-one" >This is a text1</Text> 
          <Text variant="heading-two" >This is a text1</Text> 
          <Text variant="subheading-one" >This is a text1</Text> 
          <Button size="large">Button 1</Button>
          <Button disabled={true} size="small">Button 2</Button>
          <Icon name="exclamation-triangle"/>
      </Inspect>
    </div>
  )
}

export default App