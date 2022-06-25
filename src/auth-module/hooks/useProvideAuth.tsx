import { useState } from "react";
// import { LoginUserModel, RegisterUserModel } from "../models";
// import { userActions } from "../redux/userSlice";
import { AUTH_LOCAL_STORAGE_TOKEN } from "providers";
import useAppDispatch from "hooks/useAppDispatch";
import { RegisterType } from "auth-module/models/resiterType";
import { LoginType } from "auth-module/models/loginType";
// import { useAppDispatch } from '../hooks';

export type ProvideAuthModel = {
    session: string;
    signUp: Function;
    signIn: Function;
    logOut: Function;
};

const useProvideAuth = (): ProvideAuthModel => {

    const [session, setSession] = useState(localStorage.getItem(AUTH_LOCAL_STORAGE_TOKEN) ?? "");

    const dispatch = useAppDispatch();

    
    const signUp = (registerData: RegisterType) => {
        // return dispatch(
        //     userActions.register(registerData))
        //     .then(data => {
        //         const token = data?.payload?.token || "";
        //         setSession(token);
        //         return data;
        //     });
    };

    const signIn = (loginData: LoginType) => {
        // return dispatch(
        //     userActions.login(loginData))
        //     .then(data => {
        //         const token = data?.payload?.token || "";
        //         setSession(token);
        //         return data;
        //     });
    };

    const logOut = () => {
        setSession("");
        localStorage.setItem(AUTH_LOCAL_STORAGE_TOKEN, "");
    }

    return {
        session,
        signUp,
        signIn,
        logOut
    };
}


export default useProvideAuth;
