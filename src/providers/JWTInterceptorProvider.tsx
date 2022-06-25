import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useSnackbar } from 'notistack';
// import {formValidator} from '../utils';


export const AUTH_LOCAL_STORAGE_TOKEN = 'auth_token';
export const instance =
    axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL as string });


const AxiosInterceptorProvider = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
    const [isAxiosReady, setIsAxiosReady] = useState(false);
    // const { enqueueSnackbar } = useSnackbar();

    const processMovieApiError = (response: any) => {
        if (!response?.data?.error) return;
        const errorCode = response.data.error.code;
        // const message = getErrorTextByMessage(errorCode);
        // enqueueSnackbar(message, { variant: 'error' });
    }


    useEffect(() => {

        const reqInterceptor = (request: any) => {
            const token = localStorage.getItem(AUTH_LOCAL_STORAGE_TOKEN);
            if (token) {
                request.headers.common["Authorization"] = token;
            }
            return request;
        }

        const resInterceptor = (response: any) => {
            processMovieApiError(response);
            if (response?.data?.error?.code === "WRONG_TOKEN") { // look at status
                localStorage.setItem(AUTH_LOCAL_STORAGE_TOKEN, "");
                window.location.reload();
            }
            return response;
        }

        const errInterceptor = (error: any) => {
            console.log("ERROR");
            return Promise.reject(error);
        }


        const interceptorRes = instance.interceptors.response.use(resInterceptor, errInterceptor);
        const interceptorReq = instance.interceptors.request.use(reqInterceptor);

        setIsAxiosReady(true);

        return () => {
            instance.interceptors.response.eject(interceptorReq)
            instance.interceptors.response.eject(interceptorRes)
        };

    }, [])

    return isAxiosReady ? children : <div></div>;
}

export default AxiosInterceptorProvider;