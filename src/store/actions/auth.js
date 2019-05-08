import axios from 'axios';

export const SAY_HELLO = 'SAY_HELLo';

export const sayHello = () => dispatch => {
    dispatch({type: SAY_HELLO});
}