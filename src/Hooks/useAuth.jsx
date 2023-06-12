import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProviders";


const useAuth = () => {
    const auth = useContext(AuthContex);
    return auth;

};

export default useAuth;