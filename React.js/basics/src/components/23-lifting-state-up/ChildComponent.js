import React from 'react'
import { Button } from 'react-bootstrap'

function ChildComponent(props) {
    /* const increaseCounter=()=>{
        props.handleCounter(1)
    } */
  return (
    <div>
        <h2>Cift Yonlu veri Aktarimi</h2>
        <Button onClick={()=>props.handleCounter(1)} variant='outline-success'>Arttir</Button>
    </div>
  )
}

export default ChildComponent