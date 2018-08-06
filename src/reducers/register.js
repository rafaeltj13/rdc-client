import { ActionTypes } from '../types';

const INITIAL_STATE = {
    login: '',
    password: '',
    confirmPassword: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_LOGIN_CHANGED:
            return { ...state, login: action.payload };
        case ActionTypes.REGISTER_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case ActionTypes.REGISTER_CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmPassword: action.payload };
        case ActionTypes.REGISTER_CHECK_PASSWORD:
            return { ...state, error: 'Senhas não estão iguais.' }
        case ActionTypes.REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case ActionTypes.REGISTER_USER_SUCCESS:
            return { ...state, loading: false, error: '', login: '', password: '', confirmPassword: '' };
        case ActionTypes.REGISTER_USER_FAIL:
            return {
                ...state, loading: false,
                error: 'Falha na criação de usuário. Tente novamente.', login: '', password: '', confirmPassword: ''
            };
        default:
            return state;
    }
}