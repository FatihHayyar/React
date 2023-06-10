import React, { useEffect, useState } from 'react'
import {Alert, Button, ButtonGroup, Container} from "react-bootstrap"
function UseEffect() {
    const [msg,setMsg]=useState("");
const [counter,setCounter]=useState(0)

        useEffect(()=>{
            console.log("Mounting bir kere calisir");
            return ()=>{
                console.log("unmounting bir kere calisir");
            }
        },[])
        useEffect(()=>{
            console.log("updating her render da calisir");
        })
        useEffect(()=>{
            console.log("updating ilk sefer de ve state degisince calisir");
        },[msg])


  return (
    <Container>
        <h2>Use Effect Hook</h2>
        <Alert>
            {msg} -{ }
        </Alert>
        <ButtonGroup>
            <Button variant='success' onClick={()=>setMsg("Error")}>
                Set Message
            </Button>
            <Button variant='danger'>
                Throw Eroor
            </Button>
            <Button onClick={()=>setCounter((prev)=>prev+1)}>
                {counter}
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default UseEffect