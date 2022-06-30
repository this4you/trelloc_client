import React, { useEffect, useState } from 'react';
import { axios as instance } from 'core';



const JWTInterceptorProvider = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const [isAxiosReady, setIsAxiosReady] = useState(false);
    useEffect(() => {

        const reqInterceptor = (request: any) => {
            console.log("Request interceptor");
            return request;
        }

        const resInterceptor = (response: any) => {
            console.log("Response interceptor");
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