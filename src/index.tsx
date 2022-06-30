import { Provider as ReduxProvider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { JWTInterceptorProvider } from 'core/providers';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

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

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <JWTInterceptorProvider>
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </JWTInterceptorProvider>
        </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
