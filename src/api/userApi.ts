import { axios } from 'providers';

export type LoginModelType = {

};

export type RegisterModelType = {

};

const userApi = {
    signIn: (data: LoginModelType) => axios.post('user/login'),
    signUp: (data: RegisterModelType) => axios.post('user/register')
}

export default userApi;