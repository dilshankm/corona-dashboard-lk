const fetchReducer = (state = '', action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.data
        default:
            return state
    }
}

export default fetchReducer