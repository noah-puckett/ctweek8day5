import { getCharacters } from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
//promise?
export const fetchCharacters = () => ({
    type: FETCH_CHARACTERS,
    payload: getCharacters()
});

//thunk
// export const fetchCharacters = () => dispatch => {
//     getCharacters()
//         .then(characters => {
//             dispatch({
//                 type: FETCH_CHARACTERS,
//                 payload: characters
//             });
//         });
// };
