import React, { useContext } from 'react'
import { StoreContext } from '../store/store'
import { deccrement, increment, reset } from '../store/counter/actions'

function Sayac() {
    const {counterState,dispatchCounter}=useContext(StoreContext)
  return (
    <div>
        <h1>Sayac</h1>
        <h3>{counterState.counter}</h3>
        <button onClick={()=>dispatchCounter(increment())}>Arttir</button>
        <button onClick={()=>dispatchCounter(deccrement())}>Azalt</button>
        <button onClick={()=>dispatchCounter(reset())}>Resetle</button>
    </div>
  )
}

export default Sayac