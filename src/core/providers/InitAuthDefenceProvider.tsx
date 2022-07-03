import { useAuth } from "auth-module/hooks";
import { useState, useEffect } from "react";
import { SpinnerLoader } from "core/components";
const InitAuthDefenceProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const auth = useAuth();
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        auth.initUserInfo().then(() => {
            setInitialized(true);
        });
    }, [])
    return (
        <>
            {initialized ? children : <SpinnerLoader loading={true} />}
        </>
    );
}

export default InitAuthDefenceProvider;