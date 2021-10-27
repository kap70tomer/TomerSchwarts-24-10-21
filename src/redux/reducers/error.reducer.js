const initState = {
    error: null,
    isOpen: false
};

export function errorReducer(state = initState, action) {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                isOpen: true,
                error: action.payload
            }

        case 'HIDE_ERROR':
            return {
                error: null,
                isOpen: false
            }
        default:
            return state;
    }
}