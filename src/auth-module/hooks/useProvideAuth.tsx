import { useEffect, useState } from "react";
// import { AUTH_LOCAL_STORAGE_TOKEN } from "core/providers";
import useAppDispatch from "core/hooks/useAppDispatch";
import { RegisterType } from "auth-module/models/resiterType";
import { LoginType } from "auth-module/models/loginType";
import { authActions } from "auth-module/redux/auth-state";

export type ProvideAuthModel = {
    isAuth: boolean;
    signUp: Function;
    signIn: Function;
    logOut: Function;
};

const useProvideAuth = (): ProvideAuthModel => {

    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useAppDispatch();



    const signUp = (registerData: RegisterType) => {
        return dispatch(authActions.register(registerData))
            .then(data => {
                debugger
                setIsAuth(true);
                return data;
            })
    };

    const signIn = (loginData: LoginType) => {
        return dispatch(authActions.login(loginData))
            .then(data => {
                debugger
                setIsAuth(true);
                return data;
            })
    };

    const logOut = () => {

    }

    return {
        isAuth,
        signUp,
        signIn,
        logOut
    };
}


export default useProvideAuth;
