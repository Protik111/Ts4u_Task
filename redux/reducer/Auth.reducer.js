import  { ActionTypes } from '../action/Auth.type.js';

const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    user: null,
    isAuthenticated: false,
    loading: true,
    error: {},
    isOtpSend: {
        isOtpSend: false,
        email: typeof window !== 'undefined' ? localStorage.getItem('email') : ''
    },
    success: false
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.USER_LOADED:
            return {
                ...state,
                user: payload.user,
                isAuthenticated: true,
                loading: false,
                success: true
            };
        case ActionTypes.REGISTER_SUCCESS:
            localStorage.setItem('email', payload.email)
            return {
                ...state,
                isOtpSend: payload
            }
        case ActionTypes.LOGIN_SUCCESS:
        case ActionTypes.OTP_SEND:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                success: payload.success
            };
        case ActionTypes.REGISTER_FAIL:
        case ActionTypes.AUTH_ERROR:
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.OTP_FAIL:
        case ActionTypes.LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}

export default authReducer;