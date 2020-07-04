import { useState } from "react"


export const useCounter = ( initialState = 10) => {

    const [counter, setCounter] = useState(initialState) //10

    const increment = ( ) => {
        if( counter < 30) {
            setCounter( counter + 1)
        }
    }

    const decrease = ( ) => {
        if( counter > 1 ) {
            setCounter( counter - 1)
        }
    }

    const reset = ( ) => {
        setCounter(initialState)
    }

    return  {
        counter,
        increment,
        decrease,
        reset
    }
}
