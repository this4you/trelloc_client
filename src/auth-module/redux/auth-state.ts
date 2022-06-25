import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginType } from "auth-module/models/loginType"
import { RegisterType } from "auth-module/models/resiterType"
import { UserType } from "auth-module/models/userType"
// import { userApi } from "../api"
import { AUTH_LOCAL_STORAGE_TOKEN } from "providers"

type AuthStateType = {
    user?: UserType,
    errors?: any, //TODO
}

const initialState: AuthStateType = {}

const register = createAsyncThunk(
    'auth/singUp',
    async (model: RegisterType) => {
        // const response = await userApi.signUp(model)
        // const token = response?.data?.token;
        // if (token) {
        //     localStorage.setItem(AUTH_LOCAL_STORAGE_TOKEN, token);
        // }
        // return response.data
    }
)

const login = createAsyncThunk(
    'user/login',
    async (model: LoginType) => {
        // const response = await userApi.signIn(model)
        // const token = response?.data?.token;
        // if (token) {
        //     localStorage.setItem(AUTH_LOCAL_STORAGE_TOKEN, token);
        // }
        // return response.data
    }
)


const usersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {})
    },
})

export const authReducer = usersSlice.reducer;
export const authActions = {
    register,
    login 
};