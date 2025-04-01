import axios from 'axios';
import swal from 'sweetalert';
import {
    loginConfirmedAction,
    Logout,
    loginSuccess,
} from '../store/actions/AuthActions';
import CONSTANTS from '../constants';
import { postRequest } from './request';

export function signUp(email, password) {
    //axios call
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export async function login(email, password) {
    const postData = {
        email,
        password,
    };
    const resp = await postRequest('api/adminUser/login', postData, {}, false);
    return resp;
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal('Oops', 'Email already exists', 'error');
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
            swal('Oops', 'Email not found', 'error', { button: 'Try Again!' });
            break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal('Oops', 'Invalid Password', 'error', { button: 'Try Again!' });
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export async function checkAutoLogin(dispatch, navigate) {
    // return;
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (!token || !email) {
        return;
    }
    const resp = await postRequest(
        '/api/adminUser/checkLogin',
        { token, email },
        {},
        false,
    );

    if (resp.statusCode !== 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        return;
    }
    loginSuccess(resp, dispatch);

    // dispatch(loginConfirmedAction(tokenDetails));

    // const timer = expireDate.getTime() - todaysDate.getTime();
    // runLogoutTimer(dispatch, timer, navigate);
}
