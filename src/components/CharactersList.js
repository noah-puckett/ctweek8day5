import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default function CharactersList({ characters }) {
    const charactersElement = characters.map(character => {
        return (
            <li key={character._id}>
                <Character name={character.name} imageSrc={character.photoUrl} />
            </li>
        );
    });

    return (<>
            <ul>
                {charactersElement}
            </ul>
        </>
    );
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired
};
