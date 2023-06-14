import React, { useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'

function Fetch() {
  let [users,setUsers]=useState([]);
  const getMyUserData=async()=>{
    /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(data=>{
      setUsers(data)
      console.log(data)})
    .catch(error=>console.log(error)); */
const response=await fetch('https://jsonplaceholder.typicode.com/users');
const data=await response.json();
setUsers(data);
  };

useEffect(()=>{
  getMyUserData();
},[])
  return (
    <Container>
      <h2>Fetch</h2>
        <ListGroup>
          {
           users.length>0 ?users.map((user,index)=>{
              return (<ListGroupItem key={index}>
                  {user.name}
              </ListGroupItem>)
            }) : <ListGroupItem>NoData</ListGroupItem>
              
          }
        </ListGroup>
      
    </Container>
  )
}

export default Fetch