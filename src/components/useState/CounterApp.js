import React, { useState, useEffect} from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    const add = () => {
        setState({
            ...state,
            counter1: counter1 + 1
        });
    }

    const { counter1, counter2} = state;

    // console.log(count)

  
    return (
        <>
            <h1>Counter1 - {counter1}</h1>
            <h1>Counter2 - {counter2}</h1>
            <hr/>

            <button className="btn btn-primary" onClick={add} >+1</button>
        </>
    )
}
