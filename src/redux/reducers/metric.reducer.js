const metricReducer = (state = true, action) => {
    switch (action.type) {
        case 'CONVERT_TEMPERATURE_UNITS':
            return !state;
        default:
            return state;
    };
};

export default metricReducer;