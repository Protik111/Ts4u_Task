import  { ActionTypes } from '../action/Auth.type.js';

const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    user: null,
    isAuthenticated: false,
    loading: true,
    error: {},
    isOtpSend: {
        isOtpSend: false,
        email: ''
    }
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.USER_LOADED:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isOtpSend: payload
            }
        case ActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case ActionTypes.REGISTER_FAIL:
        case ActionTypes.AUTH_ERROR:
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.LOGOUT:
        case 'ACCOUNT_DELETE':
            localStorage.removeItem('token')
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