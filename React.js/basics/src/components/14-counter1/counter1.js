import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';

function Counter1() {
    const [counter,setCounter]=useState(0);
  return (
    <Container>
        <h2>Counter 1</h2>
        <ButtonGroup>
            <Button variant='danger'onClick={()=>setCounter((prev)=>prev+1)}>+</Button>
            <Button variant='secondary' disabled>{counter}</Button>
            <Button variant='primary'onClick={()=>setCounter((prev)=>prev-1)}>-</Button>
            <Button variant='success' onClick={()=>setCounter(0)}>Reset</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Counter1