import { AuthPage } from 'pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux'
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { Login, Register } from 'auth-module';
import HomePage from 'pages/home-page/home-page';
import { useAuth } from 'auth-module/hooks';

const PrivateRoute = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const { isAuth } = useAuth();
    console.log(isAuth + " IS AUTH")
    return (
        <>
            {isAuth ? children : <Navigate to="/login" />}
        </>
    )
    //  return auth ? children : <Navigate to="/login" />;
}

function Router() {
    return (
        <Routes>
            <Route path='/home' element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>}
            />
            <Route path="/" element={<AuthPage />}>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
        </Routes>
    );
}

export default Router;
