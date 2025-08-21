import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment,decrement,reset } from './CounterSlice'
const Counter = () => {
    useSelector(state => state.Counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <p>Increment</p>
        <button onClick={dispatch(increment())}>+</button>

        <p>Increment</p>
        <button onClick={dispatch(decrement)}>-</button>

        <p>Increment</p>
        <button onClick={dispatch(reset)}>Reset</button>
    </div>
  )
}

export default Counter