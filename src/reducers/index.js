


const initialState = {

}

export const reducer = function(initialState, action) {
    switch (action.type) {
        case 'SAY_HELLO':
            return { greeting: "hello"}
    }
}