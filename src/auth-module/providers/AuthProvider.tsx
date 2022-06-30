import React, { createContext } from "react";
import { useProvideAuth } from "auth-module/hooks";
import { ProvideAuthModel } from '../hooks/useProvideAuth';
import { useAppSelector } from "core/hooks";

export const authContext = createContext({} as ProvideAuthModel);

const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const auth = useProvideAuth();
    return (
        <>
            <authContext.Provider value={auth}>{children}</authContext.Provider>
        </>
    );
}

export default AuthProvider;