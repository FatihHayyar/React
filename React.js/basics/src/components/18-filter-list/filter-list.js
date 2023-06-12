import React, { useState } from 'react'
import {Container, Form, FormControl, FormGroup, FormLabel, ListGroup} from "react-bootstrap"
import studentData from "../../assets/data/students.json"
function FilterList() {
    const [search,setSearch]=useState("");
    const filterList=search===""?studentData:studentData.filter((student)=>student.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <Container>
        <Form>
            <FormGroup>
                 <FormLabel>Isme göre Listeler</FormLabel>
                <FormControl type='text' placeholder='Search ...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </FormGroup>
        </Form>
        <ListGroup>
            {
                filterList.map((student)=>(<ListGroup.Item key={student.id} className='d-flex text-center' >
                   <p className='col-8 text-start m-0'>{student.name}</p> 
                   <p className='col-2 m-0'>{student.age}</p>     
                   <p className='col-2 m-0'>{student.grade}</p> 

                </ListGroup.Item>))
            }
        </ListGroup>
        
    </Container>
  )
}

export default FilterList