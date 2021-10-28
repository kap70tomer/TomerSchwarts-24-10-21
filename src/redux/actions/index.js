// Favorites actions- declare the actions the Favorite reducer will use to mennage the app State by.

export const addFavorite = ({location}) => {
    return {
        type: 'ADD_FAVORITE',
        payload: {
            key: location.key,
            cityName: location.cityName
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
