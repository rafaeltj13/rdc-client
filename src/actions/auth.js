import axios from 'axios';
import { setAuthorizationToken } from '../utils/setAuthorizationToken';
import { ActionTypes } from '../types';
import { BASE_URL } from '../constants';

const LOGIN_URL = `${BASE_URL}/login`

export const loginChanged = (login) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.LOGIN_CHANGED,
            payload: login
        });
    };
};

export const passwordChanged = (pass) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PASSWORD_CHANGED,
            payload: pass
        });
    };
};

export const loginUser = (login, password) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_USER });
        axios.post(LOGIN_URL, {login, password})
            .then(function (response) {
                console.log(response);
                const token = response.data.accessToken;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                loginUserSuccess(dispatch);
            })
            .catch(function (error) {
                loginUserFail(dispatch);
            });
    };
};

const loginUserSuccess = (dispatch) => {
    dispatch({
        type: ActionTypes.LOGIN_USER_SUCCESS
    });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER_FAIL });
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.LOGOUT
        });
    }
}