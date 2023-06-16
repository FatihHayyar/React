import React, { useEffect, useState } from 'react'
import {Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap"
function Form2() {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [num3, setnum3] = useState(0);
    useEffect(()=>{
setnum3(Number(num1)+Number(num2))
    },[num1,num2])
  return (
    <Container>
        <Form>
            <FormGroup>
                <FormLabel>First Number</FormLabel>
                <FormControl 
                    type='number'
                    placeholder='Enter first Number'
                    value={num1}
                    onChange={(e)=>setnum1(e.target.value)}/>
   
            </FormGroup>
            <FormGroup>
                <FormLabel>Second Number</FormLabel>
                <FormControl 
                    type='number'
                    placeholder='Enter second Number'
                    value={num2}
                    onChange={(e)=>setnum2(e.target.value)}/>
   
            </FormGroup>
            <FormGroup>
                <FormLabel>total</FormLabel>
                <FormControl 
                    type='number'
                    placeholder='Enter first Number'
                    value={num3}
                    disabled/>
   
            </FormGroup>
        </Form>
    </Container>
  )
}

export default Form2