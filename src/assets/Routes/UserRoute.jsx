import { ImSpinner9 } from "react-icons/im";
import useRole from "../../Hooks/useRole";
import { Navigate } from "react-router-dom";


const UserRoute = ({ children }) => {

    const [role, isLoading] = useRole();

    if (isLoading) return <div className="flex justify-center py-20">
        <ImSpinner9 className="text-3xl font-bold animate-spin"></ImSpinner9>
    </div>

    if (role === 'user') return children ;

    return  <Navigate to='/dashboardLayout' />
};

export default UserRoute;