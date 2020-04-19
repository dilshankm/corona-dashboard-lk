const sidenavReducer = (state = '', action) => {
    switch (action.type) {
        case "COVID-19 Updates":
            return state = 'COVID'
        case "About Us":
            return state = 'ABOUT'
        case "Home":
            return state = 'HOME'
        default:
            return state
    }
}

export default sidenavReducer;