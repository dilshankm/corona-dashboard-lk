const toggleReducer = (status = null, action) => {
    switch (action.type) {
        case 'TOGGLE_STATE':
            return action.payload
        default:
            return status
    }
}

export default toggleReducer