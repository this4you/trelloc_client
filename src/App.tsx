import { AuthPage } from 'pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux'
import {
    Routes,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";

import { Login, Register } from 'auth-module';
import { JWTInterceptorProvider } from 'core/providers';
import store from 'redux/store';
import { AuthProvider } from 'auth-module/providers';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2B7A78',
        },
        secondary: {
            main: '#DEF2F1',
        },
        text: {
            primary: '#2B7A78',
        },
    },
});


function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <JWTInterceptorProvider>
                        <ReduxProvider store={store}>
                            <AuthProvider>
                                <Routes>
                                    <Route path="/" element={<AuthPage />}>
                                        <Route index element={<Login />} />
                                        <Route path="login" element={<Login />} />
                                        <Route path="register" element={<Register />} />
                                        <Route path="*" element={<Navigate to="/login" replace />} />
                                    </Route>
                                </Routes>
                            </AuthProvider>
                        </ReduxProvider>
                    </JWTInterceptorProvider>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
