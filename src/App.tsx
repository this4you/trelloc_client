import Router from './Router';
import { AuthProvider } from 'auth-module/providers';
import './App.css';


function App() {
    return (
        <div className="app">
            <AuthProvider>
                <Router></Router>
            </AuthProvider>
        </div>
    );
}

export default App;
