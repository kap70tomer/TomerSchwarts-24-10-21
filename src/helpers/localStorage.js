// Desc - Helper functions to Load And Save the state to local storage. 
// Meaning it will last refreshing and closing of the tab in the browser.
// ** look at Redux-Presist selution.. 

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites')
        if (serializedState === null) {
            return []
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('favorites', serializedState)
    } catch (err) {
        // IGNORE
    }
}

