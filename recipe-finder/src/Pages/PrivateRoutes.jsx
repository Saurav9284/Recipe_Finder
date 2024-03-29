
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const isAuthenticated = localStorage.getItem('email');
    if(!isAuthenticated)
        return <Navigate to={"/login"}/>

        return children;
};

export default PrivateRoutes;


