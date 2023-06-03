import React from 'react'

const Welcome=(props)=> {
  return (
    <div className='welcome'>
        <h1>
            Welcome {props.firstName} {props.lastName}
            
        </h1>
        <p>
            {
            props.disabled|| <p>{props.disc}</p>
            }
        </p>
        
        
        </div>
  )
}

export default Welcome