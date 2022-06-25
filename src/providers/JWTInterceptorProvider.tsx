import axios from 'axios';
import React, { useEffect, useState } from 'react';



export const AUTH_LOCAL_STORAGE_TOKEN = 'auth_token';
export const instance =
    axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL as string });


const JWTInterceptorProvider = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const [isAxiosReady, setIsAxiosReady] = useState(false);

    const processMovieApiError = (response: any) => {
        if (!response?.data?.error) return;
        const errorCode = response.data.error.code;
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

    return (
        <>
            {isAxiosReady ? children : <div></div>}
        </>
    );
}

export default JWTInterceptorProvider;