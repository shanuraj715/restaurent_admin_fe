import React from 'react';
//import { useNavigate } from "react-router-dom";

import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';
import { toast } from 'react-toastify';
import { setLoader, removeLoader } from './AppState';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';

export function signupAction(email, password, navigate) {
    return (dispatch) => {
        signUp(email, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data);
                // runLogoutTimer(
                //     dispatch,
                //     response.data.expiresIn * 1000,
                //     //history,
                // );
                dispatch(confirmedSignupAction(response.data));
                navigate('/dashboard');
                //history.push('/dashboard');
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}

export function Logout(navigate) {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    // navigate('/login');
    //history.push('/login');

    return {
        type: LOGOUT_ACTION,
    };
}

export const loginSuccess = (response, dispatch) => {
    const loginData = {
        name: response.data.name,
        email: response.data.email,
        mobile: response.data.phone,
        userType: response.data.role,
        userId: response.data.userId,
        lastLogin: response.data.lastLogin,
        token: response.data.token,
    };
    dispatch(loginConfirmedAction(loginData));
};

export function loginAction(email, password, navigate) {
    return (dispatch) => {
        dispatch(setLoader());
        login(email, password)
            .then((response) => {
                if (response.status === 401) {
                    toast.error('Invalid email or password');
                    return;
                }
                if (response.status === 403) {
                    toast.error('Account not activated');
                    return;
                }
                saveTokenInLocalStorage(
                    response.data?.token,
                    response.data?.email,
                );
                // runLogoutTimer(
                //     dispatch,
                //     response.data.expiresIn * 1000,
                //     navigate,
                // );
                loginSuccess(response, dispatch);
            })
            .catch((error) => {
                console.log(error);
                // const errorMessage = formatError(error.response.data);
                // dispatch(loginFailedAction(errorMessage));
            })
            .finally(() => {
                dispatch(removeLoader());
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
// export function checkLoginUsingToken() {
//     return dispatch => {
//         dispatch(setLoader())
//         const token = localStorage.getItem('token');
//         if(token){

//         }
//     }
// }
