import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, characterName, characterImage }) {
    return (<>
        <h2>{characterName}</h2>
        <img src={characterImage}></img>
        <p>{quote}</p>
        </>
    );
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired
};
