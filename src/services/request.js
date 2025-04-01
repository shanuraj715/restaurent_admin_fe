import axios from 'axios';
import CONSTANTS from '../constants';

// Create an Axios instance with default configuration
const api = axios.create({
    baseURL: CONSTANTS.API_ENDPOINT, // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',

        // Add any default headers here
    },
});

// Add Authorization header dynamically
const token = localStorage.getItem('token');
if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

/**
 * GET request
 * @param {string} url - The endpoint URL
 * @param {object} params - Query parameters (optional)
 * @param {object} headers - Additional headers (optional)
 * @returns {Promise} - Axios response
 */
const getRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await api.get(url, {
            params,
            headers: {
                ...api.defaults.headers,
                ...headers,
            },
        });
        return response.data;
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

/**
 * POST request
 * @param {string} url - The endpoint URL
 * @param {object} data - The request payload
 * @param {object} headers - Additional headers (optional)
 * @returns {Promise} - Axios response
 */
const postRequest = async (
    url,
    data = {},
    headers = {},
    returnError = false,
) => {
    try {
        const response = await api.post(url, data, {
            headers: {
                ...api.defaults.headers,
                ...headers,
            },
        });
        return response.data;
    } catch (error) {
        if (!returnError) {
            return error.response;
        } else {
            handleRequestError(error);
            throw error;
        }
    }
};

/**
 * PUT request
 * @param {string} url - The endpoint URL
 * @param {object} data - The request payload
 * @param {object} headers - Additional headers (optional)
 * @returns {Promise} - Axios response
 */
const putRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await api.put(url, data, {
            headers: {
                ...api.defaults.headers,
                ...headers,
            },
        });
        return response.data;
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

/**
 * DELETE request
 * @param {string} url - The endpoint URL
 * @param {object} headers - Additional headers (optional)
 * @returns {Promise} - Axios response
 */
const deleteRequest = async (url, headers = {}) => {
    try {
        const response = await api.delete(url, {
            headers: {
                ...api.defaults.headers,
                ...headers,
            },
        });
        return response.data;
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

/**
 * Handle request errors
 * @param {object} error - The error object
 */
const handleRequestError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // console.error(
        //     'Response error:',
        //     error.response.status,
        //     error.response.data,
        // );
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
    } else {
        // Something happened in setting up the request
        console.error('Request setup error:', error.message);
    }
};

export { getRequest, postRequest, putRequest, deleteRequest };
