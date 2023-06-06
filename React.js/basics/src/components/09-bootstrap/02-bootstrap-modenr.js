import React from 'react'

import {Row,Container,Col, Alert, Button} from "react-bootstrap"
function BootstraModenr() {
  return (
    <Container>
    <h2>Bootstrap modern Yontem</h2>
    <Alert variant='warning'>Warning Message</Alert>
    <Row className='text-center'>
        <Col>H</Col>
        <Col>E</Col>
        <Col>L</Col>
        <Col>L</Col>
        <Col>O</Col>
    </Row>
    <Button variant='outline-primary'>Bootsrap Buton</Button>
    </Container>
  )
}

export default BootstraModenr