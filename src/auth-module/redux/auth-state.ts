import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginType } from "auth-module/models/loginType"
import { RegisterType } from "auth-module/models/resiterType"
import { UserType } from "auth-module/models/userType"
import { authApi } from 'api';

type AuthStateType = {
    user?: UserType,
    errors?: any, //TODO
}

const initialState: AuthStateType = {}

const register = createAsyncThunk(
    'auth/singUp',
    async (model: RegisterType) => {
        const response = await authApi.signUp(model);
        return response.data;
    }
)

const login = createAsyncThunk(
    'auth/login',
    async (model: LoginType) => {
        const response = await authApi.signIn(model);
        return response.data;
    }
)

const info = createAsyncThunk(
    'auth/info',
    async () => {
        const response = await authApi.info();
        return response.data;
    }
)


const usersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.rejected, (state, action) => {
            state.errors = action.payload;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.errors = action.payload;
        });

        builder.addCase(info.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
})

export const authReducer = usersSlice.reducer;
export const authActions = {
    register,
    login,
    info
};