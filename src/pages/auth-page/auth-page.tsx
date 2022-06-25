import { Logo } from "core/components";
import Paper from '@mui/material/Paper';

import './auth-page.scss';
import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return (
        <div className="auth-page f-c">
            <Paper elevation={10} className="auth-container">
                <div className="auth-container_logo">
                    <Logo />
                    <span>TrelloC</span>
                </div>
                <div className="auth-container_form">
                    <Outlet></Outlet>
                </div>
            </Paper>
        </div >
    );
}

export default AuthPage;