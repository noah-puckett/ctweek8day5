import { FETCH_QUOTE, PENDING } from '../actions/simpsonsActions';

const initialState = {
    loading: false,
    quote: '',
    characterName: '',
    characterImage: ''
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return { ...state, loading: true };
        case FETCH_QUOTE:
            return { ...action.payload, loading: false };
        default:
            return state;
    }
}
