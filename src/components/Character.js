import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, imageSrc }) {
    return (<>
        <img src={imageSrc}></img>
        <h2>{name}</h2>
        </>
    );
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
};
