
const initialState = {
    someKey: ''
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'AN_ACTION':
            return { ...state, someKey: action.payload };
        default: 
            return state;
    }
}
