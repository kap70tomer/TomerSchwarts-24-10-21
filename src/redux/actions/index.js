
// Favorites
export const addFavorite = (id, name) => {
    return {
        type: 'ADD_FAVORITE',
        payload: {
            id: id,
            name: name
        }
    }
}


export const removeFavorite = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

// Loading

export const toggleLoading = () => {
    return {
        type: 'TOGGLE_LOADING'
    }
}

// Convert temp

export const convertUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}

// Dark Mode

export const toggleDarkMode = () => {
    return {
        type: 'SET_DARK_MODE'
    }
}
