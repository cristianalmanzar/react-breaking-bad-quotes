import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import { Loader } from '../loader/Loader'
import { BlockQuote } from '../blockquote/BlockQuote'
import './multiple.css'


export const MultipleCustomHooks = () => {

    const {counter, increment, decrease} = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];
    
    console.log(counter);
    return (
        <div>
            <div className="header text-center">
                <h1>Breaking Bad Quotes</h1>
                <hr/>
            </div>

            {
                loading
                ?
                (
                    <Loader/>
                )
                :
                (
                    <BlockQuote author={author} quote={quote}/>
                )
            }

            <div className="footer spaced">
                <button className="button primary" onClick={decrease}>
                    Previous quote...
                </button>
                <button className="button primary" onClick={increment}>
                    Next quote...
                </button>
            </div>

        </div>
        
    )
}
