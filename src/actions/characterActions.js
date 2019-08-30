import { getCharacters } from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
//promise?
export const fetchCharacters = () => ({
    type: FETCH_CHARACTERS,
    payload: getCharacters()
});
