import React, { useState } from 'react'
import {Button, Container} from "react-bootstrap"
import peopleData from "../../assets/data/people.json"
import Person from './person';
function Birthday() {
    const [people,setPeople]=useState(peopleData);
  return (
    <Container>
        <h2>Who was born today ? </h2>
        <p>There are 10 person who was born today</p>
        {
            people.map((person)=>(<Person key={person.id} {...person}/>))
        }
        <Button variant='danger'>Clear All</Button>
    </Container>
  )
}

export default Birthday