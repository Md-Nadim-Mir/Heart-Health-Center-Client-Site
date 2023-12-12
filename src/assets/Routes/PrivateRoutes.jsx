import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

const PrivateRoutes = ({children}) => {

    const {user,loading}=useAuth();
    const location =useLocation();

    if(loading){

        return <div className="flex justify-center py-20">
                        <ImSpinner9 className="text-3xl font-bold animate-spin"></ImSpinner9>
               </div>

    }

    if(user) return children;

    return <Navigate to='/login' state={ {from: location} } replace />
};

export default PrivateRoutes;