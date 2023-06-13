import React, { useEffect } from 'react'

function FunctionComponent() {
useEffect(()=>{
  console.log("component ilk mountta calisir")
},[])
  console.log("ilk burasi calisir")
  return (
    <div>FunctionComponent</div>
  )
}

export default FunctionComponent