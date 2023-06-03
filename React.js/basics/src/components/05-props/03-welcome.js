import React from 'react'

function Welcome2(props) {
    const { firstName, lastName } = props;
  return (
    <div>
        <h2 className='welcome'>
            Welcome2 {firstName} {lastName}
        </h2>

    </div>
  )
}

export default Welcome2