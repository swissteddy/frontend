const initialState = {
    value: 0,
};

function reducer(state= initialState, action) {
    switch(action.type){
        case 'Increase':
            return{ ...state, value: state.value +1};
        case 'Decrease':
            return{ ...state, value: state.value -1};
        default:
            return state;
    }
}

export default reducer;