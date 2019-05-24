

const initialState  = {
    userPoems = []
}

export const poemsReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_USER_POEMS:
            return {...state}
    }
}