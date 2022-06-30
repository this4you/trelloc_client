import { AuthPage } from 'pages';
import './App.css';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { Login, Register } from 'auth-module';
import HomePage from 'pages/home-page/home-page';
import { useAuth } from 'auth-module/hooks';

const PrivateRoute = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const auth = useAuth();
    return (
        <>
            {auth.isAuth ? children : <Navigate to="/login" />}
        </>
    )
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
