


export const initialState = {
    hello: "hello"
}

export const red = (initialState, action) => {
    switch (action.type) {
        case 'SAY_HELLO':
            return { greeting: "hello now"}
    }
}