import { Login } from "auth-module";
import { Logo } from "core";
import Paper from '@mui/material/Paper';

import './auth-page.scss';

const AuthPage = () => {
    return (
        <div className="auth-page f-c">
            <Paper elevation={10} className="auth-container">
                <div className="auth-container_logo">
                    <Logo /> 
                    <span>TrelloC</span>
                </div>
                <div className="auth-container_form">
                    <Login />
                </div>
            </Paper>
        </div >
    );
}

export default AuthPage;