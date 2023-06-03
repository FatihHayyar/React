import React from 'react'
import Welcome from './welcome'
import Welcome2 from './03-welcome'
function Greetings() {
  return (
    <div>
      <Welcome firstName="John" lastName="Doe" disabled disc="Ben bir developerim"/>
      <Welcome firstName="Jack" lastName="Doe"  disc="Ben bir developerim"/>
      <Welcome2 firstName="Jack" lastName="Doe"  disc="Ben bir developerim"/>
    </div>
  )
}

export default Greetings