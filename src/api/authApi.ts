import { LoginType } from 'auth-module/models/loginType';
import { RegisterType } from 'auth-module/models/resiterType';
import { axios } from 'core';

type ResponseErrorType = {
    code: string;
    message: string
}

type AuthResponseType = {
    error?: ResponseErrorType
}

const authApi = {
    signIn: (data: LoginType) => axios.post<AuthResponseType>('auth/login'),
    signUp: (data: RegisterType) => axios.post<AuthResponseType>('auth/register'),
    info: () => axios.get('auth/info')
}

export default authApi;