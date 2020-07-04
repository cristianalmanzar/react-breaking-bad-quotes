import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'


export const CounterCustomHook = () => {

    const { state, increment, decrease, reset } = useCounter(100);

    return (
        <>
            <h1> Counter with Hook: {state} </h1>
            <hr/>


            <button className="btn btn-danger" onClick={  () => decrease(2)}> -1 </button>
            <button className="btn btn-warning" onClick={reset} >RESET</button>
            <button className="btn btn-primary" onClick={ () => increment(2)}> +1 </button>
        </>
    )
}
