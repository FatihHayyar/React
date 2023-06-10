import React, { useState } from 'react'
import {Button, ButtonGroup, Container} from "react-bootstrap"
import peopleData from "../../assets/data/people.json"
import Person from './person';
function Birthday() {
    const [people,setPeople]=useState(peopleData);
    const deletePerson=(id)=>{
      const arr=people.filter((person)=>person.id!==id);
      setPeople(arr);
    }
  return (
    <Container>
        <h2>Who was born today ? </h2>
        <p>There are {people.length} person who was born today</p>
        {
            people.map((person)=>(<Person key={person.id} {...person} deletePerson={deletePerson}/>))
        }
        <ButtonGroup>
        <Button variant='danger'onClick={()=>setPeople([])}>Clear All</Button>
        <Button variant='success' onClick={()=>setPeople(peopleData)}>Callback Data</Button>
        </ButtonGroup>
        
    </Container>
  )
}

export default Birthday