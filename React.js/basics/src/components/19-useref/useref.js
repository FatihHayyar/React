import React, { useRef } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap';

function UseRef() {
    const emailRef=useRef(null);
    const butonref=useRef(null);
    const handlerfocus=()=>{
        emailRef.current.focus();
        butonref.current.style.color="red";
    }
  return (
    <Container>
        <Form>
            <FormControl type='email' className='m-3' placeholder='type your email' ref={emailRef}/>
        </Form>
        <Button ref={butonref} onClick={handlerfocus}>Set focus</Button>
        <p></p>
    </Container>
    
  )
}

export default UseRef