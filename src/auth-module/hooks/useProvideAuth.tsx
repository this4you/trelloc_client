import {useState } from "react";
import useAppDispatch from "core/hooks/useAppDispatch";
import { RegisterType } from "auth-module/models/resiterType";
import { LoginType } from "auth-module/models/loginType";
import { authActions } from "auth-module/redux/auth-state";

export type ProvideAuthModel = {
    isAuth: boolean;
    signUp: Function;
    signIn: Function;
    logOut: Function;
    info: Function;
};

const useProvideAuth = (): ProvideAuthModel => {

    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useAppDispatch();



    const signUp = (registerData: RegisterType) => {
        return dispatch(authActions.register(registerData))
            .then(data => {
                setIsAuth(true);
                return data;
            })
    };

    const signIn = (loginData: LoginType) => {
        return dispatch(authActions.login(loginData))
            .then(data => {
                setIsAuth(true);
                return data;
            })
    };

    const logOut = () => {

    }

    const info = () => {
        return dispatch(authActions.info())
            .then((data: any) => {
                setIsAuth(!data.error);
                return data;
            })
    }

    return {
        isAuth,
        signUp,
        signIn,
        logOut,
        info
    };
}


export default useProvideAuth;
