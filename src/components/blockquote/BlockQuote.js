import React from 'react'
import PropTypes from 'prop-types';

export const BlockQuote = ({author, quote}) => {
    return (
        <>
            <blockquote className="blockquote ">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </>
    )
}

BlockQuote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}
