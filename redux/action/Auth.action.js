import axios from 'axios';
// import { ActionTypes } from './Auth.types';
import { ActionTypes } from './Auth.type';
// import setAuthToken from '../../utils/setAuthToken';

// export const loadUser = () => async dispatch => {
//     if (localStorage.token) {
//         setAuthToken(localStorage.token);
//     }

//     try {
//         const response = await axios.get('/api/user/userbyid');

//         dispatch({
//             type: ActionTypes.USER_LOADED,
//             payload: response.data
//         })
//     } catch (error) {
//         dispatch({
//             type: ActionTypes.AUTH_ERROR
//         })
//     }
// }

//register a user
export const registerUser = ({ firstName, lastName, email, phone, password }) => async dispatch => {
    const headersConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ firstName, lastName, email, phone, password });

    try {
        const response = await axios.post('https://api-staging.ts4u.us/api/user/register', body, headersConfig);

        dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: response.data
        });

        // dispatch(loadUser());

        // dispatch(setAlert('Account Has Been Created.', 'Pcreated'))

    } catch (error) {
        const errors = error.response.data.errors;
        // console.log(errors, 'errors');
        // if (errors) {
        //     errors.map(error => dispatch(setAlert(error.msg, 'notMatchedP')))
        // }
        dispatch({
            type: ActionTypes.REGISTER_FAIL
        });
    }
}

//login a user
export const loginUser = ({ email, password }) => async dispatch => {
    console.log(email, password, 'from action');
    const headersConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const response = await axios.post('https://api-staging.ts4u.us/api/user/login', body, headersConfig);

        dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: response.data
        });

        // dispatch(loadUser());

    } catch (error) {
        const errors = error.response.data.errors;
        // console.log(errors, 'errors');
        // if (errors) {
        //     errors.map(error => dispatch(setAlert(error.msg, 'notMatchedP')))
        // }
        dispatch({
            type: ActionTypes.LOGIN_FAIL
        })
    }
}

//logout a user
export const logoutUser = () => dispatch => {
    dispatch({
        type: ActionTypes.CLEAR_PROFILE
    });

    dispatch({
        type: ActionTypes.LOGOUT
    });    
}