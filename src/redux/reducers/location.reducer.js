const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        case 'SET_LOCATION':
            return action.payload;
        default:
            return state;
    };
};

export default locationReducer;