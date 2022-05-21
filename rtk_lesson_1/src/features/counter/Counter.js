import React, { useState } from 'react'

import {useSelector,useDispatch} from 'react-redux';

import { increment, decrement ,reset,incrementByAmount} from './counterSlice';

export const Counter = () => {

const count =useSelector((state)=>state.counter.count)
const dispatch=useDispatch();
const [incrementValue,setIncrementValue]=useState(0);

const addValue=Number(incrementValue)|| 0;



  return ( 
    <section>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        
       
        <input type="text" value={incrementValue} onChange={(e)=>setIncrementValue(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Increment By amount</button>
    </section>
  )
}
