import React from 'react'
import {Container,Button} from "react-bootstrap"
function Events() {
    const parametresizFonksiyon=()=>{
        alert("Parametresiz calisti");
    }
    const parametreliFonksiyon=(parametre)=>{
        alert(`Parametreli calisti ${parametre}`);
    }
  return (
    <Container className='d-flex gap-3'>
        <Button variant='danger' onClick={parametresizFonksiyon}> Paramtresiz</Button>
        <Button variant='warning' onClick={()=>{parametreliFonksiyon("nihaha")}}>Parametreli</Button>
    </Container>
  )
}

export default Events