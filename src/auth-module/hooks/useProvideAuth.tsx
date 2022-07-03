import {useState } from "react";
import useAppDispatch from "core/hooks/useAppDispatch";
import { RegisterType } from "auth-module/models/resiterType";
import { LoginType } from "auth-module/models/loginType";
import { register, login, info } from "auth-module/redux/auth-state";

export type ProvideAuthModel = {
    isAuth: boolean;
    signUp: Function;
    signIn: Function;
    logOut: Function;
    initUserInfo: Function;
};

const useProvideAuth = (): ProvideAuthModel => {

    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useAppDispatch();



    const signUp = (registerData: RegisterType) => {
        return dispatch(register(registerData))
            .then(data => {
                // setIsAuth(true);
                return data;
            })
    };

    const signIn = (loginData: LoginType) => {
        return dispatch(login(loginData))
            .then(data => {
                // setIsAuth(true);
                return data;
            })
    };

    const logOut = () => {

    }

    const initUserInfo = () => {
        return dispatch(info())
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
        initUserInfo
    };
}


export default useProvideAuth;
