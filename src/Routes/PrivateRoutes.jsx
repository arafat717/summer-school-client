import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProviders";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    let location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;