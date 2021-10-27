const initialState = {
    isFetching: true,
    text: '',
    locations: []
}
const suggestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUGGESTIONS_REQ':
            return {
                ...state,
                isFetching: state.isFetching = true,
            }
        case 'GET_SUGGESTIONS_RES':
            return {
                ...state,
                isFetching: state.isFetching = false,
                locations: action.payload
            }
        case 'INIT_SUGGESTIONS':
            return {
                ...state,
                text: '',
                locations: []
            }
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        default:
            return state
    }
}

export default suggestionsReducer