const initialState = {
    currentUser: null,
    token: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'user/login':
            return {
                ...state,
                currentUser: 110,
                token: action.payload,
            }

            default:
                return state;
    } 
}

export default userReducer