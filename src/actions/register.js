import axios from 'axios';
import { push } from 'connected-react-router';
import { ActionTypes } from '../types';
import { BASE_URL } from '../constants';

const USER_URL = `${BASE_URL}/user`;

export const loginChanged = (login) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REGISTER_LOGIN_CHANGED,
            payload: login
        });
    };
};

export const passwordChanged = (pass) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REGISTER_PASSWORD_CHANGED,
            payload: pass
        });
    };
};

export const confirmPasswordChanged = (pass) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REGISTER_CONFIRM_PASSWORD_CHANGED,
            payload: pass
        });
    };
};

export const registerUser = (login, password, confirmPassword) => {
    return (dispatch) => {
        if(!login || !password || !confirmPassword) {
            registerUserFail(dispatch);
            return;
        } else if(password !== confirmPassword){
            dispatch({ type: ActionTypes.REGISTER_CHECK_PASSWORD });
            return;
        }

        dispatch({ type: ActionTypes.REGISTER_USER });
        axios.post(USER_URL, { login, password, type: 2 })
            .then(function (response) {
                registerUserSuccess(response.data, dispatch);
            })
            .catch(function (error) {
                registerUserFail(dispatch);
            });
    };
};

const registerUserSuccess = (user, dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS });
    dispatch({ type: ActionTypes.LOGIN_CHANGED, payload: user.login })
    dispatch(push('/login'));
};

const registerUserFail = (dispatch) => {
    dispatch({ type: ActionTypes.REGISTER_USER_FAIL });
}