import { AuthPage } from 'pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

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
        <ThemeProvider theme={theme}>
            <div className="app">
                <AuthPage />
            </div>
        </ThemeProvider>
    );
}

export default App;
