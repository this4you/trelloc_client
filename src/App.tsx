import Router from './Router';
import { AuthProvider } from 'auth-module/providers';
import './App.css';
import { InitAuthDefenceProvider } from 'core/providers';

function App() {
    return (
        <div className="app">
            <AuthProvider>
                <InitAuthDefenceProvider>
                    <Router/>
                </InitAuthDefenceProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
