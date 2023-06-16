import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function Form() {
    const [fullName, setfullName] = useState("")
    const handleChance=(e)=>{
        setfullName(e.target.value);
    }
  return (
    <Container>
        <h1 className="text-center">Form</h1>
        <form action="">
            <label htmlFor="fullName">Name: </label>
            <input
                type="text"
                id='fullName'
                name='fullName'
                placeholder='Enter your Full Name'
                value={fullName}
                onChange={handleChance} />
        </form>
       
    </Container>
  )
}

export default Form