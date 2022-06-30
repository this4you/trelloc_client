import Router from './Router';
import { AuthProvider } from 'auth-module/providers';
import './App.css';
import { useAuth } from 'auth-module/hooks';
import { useAppSelector } from 'core/hooks';
import { useEffect, useState } from 'react';


function App() {
    return (
        <div className="app">
            <AuthProvider>
                <InitProvider>
                    <Router></Router>
                </InitProvider>
            </AuthProvider>
        </div>
    );
}

const InitProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const auth = useAuth();
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        auth.info().then(() => {
            setInitialized(true);
        });
    }, [])

    console.log("AuthProvider", auth.isAuth);
    return (
        <>
            {initialized ? children : <h1>Loading...</h1>}
        </>
    );
}
export default App;
