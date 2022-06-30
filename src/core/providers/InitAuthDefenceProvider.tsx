import { useAuth } from "auth-module/hooks";
import { useState, useEffect } from "react";

const InitAuthDefenceProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const auth = useAuth();
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        auth.info().then(() => {
            setInitialized(true);
        });
    }, [])
    return (
        <>
            {initialized ? children : <h1>Loading...</h1>}
        </>
    );
}

export default InitAuthDefenceProvider;