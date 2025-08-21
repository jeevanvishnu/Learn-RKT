import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment,decrement,reset } from './CounterSlice'
const Counter = () => {
   const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <p>Increment</p>
        <button onClick={()=> dispatch(increment())}>+</button>

        <p>Increment</p>
        <button onClick={()=> dispatch(decrement())}>-</button>

        <p>Increment</p>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter