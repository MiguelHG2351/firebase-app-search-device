const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, user: action.payload}
        }

        default: {
            return state
        }
    }
}

export default reducer