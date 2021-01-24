import endpoints from './endpoints';
import axios from 'axios';
import {
    hideAppLoader,
    showAppLoader,
} from '../lib';

// eslint-disable-next-line no-undef
const baseURL = `${process.env['REACT_APP_API_PROTOCOL']}${process.env['REACT_APP_API_ENDPOINT']}`;

// Axios instance
const api = axios.create({
    baseURL,
});

api.interceptors.request.use(
    (config) => {
        showAppLoader();
        return config;
    },
    (error) => {
        hideAppLoader();
        Promise.reject(error);
    }
);
api.interceptors.response.use(
    (response) => {
        hideAppLoader();
        return response;
    },
    (error) => {
        hideAppLoader();
        return Promise.reject(error);
    }
);

export default api;

export { endpoints, baseURL };
