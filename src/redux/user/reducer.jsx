const initialState = {
    currentUser: null,
    token: null,
}

const userReducer = (state = initialState, action) => {
    if (action.type === 'user/login'){
        return {
            ...state,
            currentUser: 110,
            token: action.payload,
        }
    }
    return state;
}

export default userReducer