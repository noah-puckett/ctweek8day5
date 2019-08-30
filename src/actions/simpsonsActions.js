import { getQuote } from '../services/simpsonsApi';
export const PENDING = 'PENDING';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = () => ({
    pendingType: PENDING,
    type: FETCH_QUOTE,
    payload: getQuote()
});

