import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

function State() {
    const [mode,setMode]=useState("Dark");
    let classNames="bg-dark text-light p-5";
    if(mode==="Light"){
        classNames="bg-light text-dark p-5";
    }
  return (
    <Container className={classNames} style={{height:500}}>
        <h1>Dark-Light Mode</h1>
        <ButtonGroup>
            <Button variant='secondary'onClick={()=>setMode("Dark")}>Dark</Button>
            <Button variant='info' onClick={()=>setMode("Light")}>Light</Button>
        </ButtonGroup>
    </Container>
  )
}

export default State