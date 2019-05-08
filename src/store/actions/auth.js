import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLo';

export const sayHello = () => {
    dispatch({type: SAY_HELLO})
}