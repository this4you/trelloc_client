import { AuthPage } from 'pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

import {
    Routes,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";

import { Login, Register } from 'auth-module';

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
                    <Routes>
                        <Route path="/" element={<AuthPage />}>
                            <Route index element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="*" element={<Navigate to="/login" replace />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
