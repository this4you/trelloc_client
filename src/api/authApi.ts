import { LoginType } from 'auth-module/models/loginType';
import { RegisterType } from 'auth-module/models/resiterType';
import { axios } from 'core';

const authApi = {
    signIn: (data: LoginType) => axios.post('auth/login'),
    signUp: (data: RegisterType) => axios.post('auth/register')
}

export default authApi;