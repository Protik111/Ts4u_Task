import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './Alert.action';
import { ActionTypes } from './Auth.type';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const response = await axios.post('https://api-staging.ts4u.us/api/user/verify');

        dispatch({
            type: ActionTypes.USER_LOADED,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ActionTypes.AUTH_ERROR
        })
    }
}

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

    } catch (error) {
        dispatch(setAlert(error.response.data.error, 'notMatchedP'))

        dispatch({
            type: ActionTypes.REGISTER_FAIL
        });
    }
}

//login a user
export const loginUser = ({ email, password }) => async dispatch => {
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
    } catch (error) {
        dispatch(setAlert(error.response.data.error, 'notMatchedP'))
        dispatch({
            type: ActionTypes.LOGIN_FAIL
        })
    }
}
//send otp
export const sendOtp = ({ email, otp }) => async dispatch => {
    const headersConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, otp });

    try {
        const response = await axios.post('https://api-staging.ts4u.us/api/user/verifyotp', body, headersConfig);

        dispatch({
            type: ActionTypes.OTP_SEND,
            payload: response.data
        });

    } catch (error) {
        dispatch(setAlert(error.response.data.error, 'notMatchedP'))
        dispatch({
            type: ActionTypes.OTP_FAIL
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