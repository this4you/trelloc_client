import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit"
import { LoginType } from "auth-module/models/loginType"
import { RegisterType } from "auth-module/models/resiterType"
import { UserType } from "auth-module/models/userType"
import { authApi } from 'api';
import { isFulfilledAction, isPendingAction, isRejectAction } from "redux/utils";

type AuthStateType = {
    loading: boolean,
    user?: UserType,
    errors?: any, //TODO
}

const initialState: AuthStateType = {
    loading: false
}

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
        builder.addCase(info.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addMatcher(isPendingAction, (state, action) => {
            state.loading = true;
        })
        builder.addMatcher(isFulfilledAction, (state, action) => {
            state.loading = false;
        })
        builder.addMatcher(isRejectAction, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        })
    },
})

export const authReducer = usersSlice.reducer;
export const authActions = {
    register,
    login,
    info
};