import { ActionTypes } from '../types';

const INITIAL_STATE = {
    login: '',
    password: '',
    error: '',
    token: '',
    loading: false
};

export default (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case ActionTypes.LOGIN_CHANGED:
            return { ...state, login: action.payload };
        case ActionTypes.PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case ActionTypes.LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case ActionTypes.LOGIN_USER_SUCCESS:
            return { ...state, loading: false, error: '' };
        case ActionTypes.LOGIN_USER_FAIL:
            return { ...state, loading: false,
                    error: 'Falha na autenticação. Tente novamente.', login: '', password: '' };
        case ActionTypes.LOGOUT:
            return { ...state, user: null, token: '' };
        default:
            return state;
    }
}