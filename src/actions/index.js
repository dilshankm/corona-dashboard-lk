export const getAllData = request => ({
    type: 'FETCH_ALL',
    payload: request
})


export const getToggleStat = status => ({
    type: 'TOGGLE_STATE',
    payload: status
})

