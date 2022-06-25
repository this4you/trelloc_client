import { authContext } from "auth-module/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
    return useContext(authContext);
};

export default useAuth;