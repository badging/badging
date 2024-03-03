import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { userData } = useContext(DataContext);

    console.log(("user", userData));

    if (userData.userId === "") {
        return <Navigate to="/" replace />
    }
    return children? children : <Outlet />
}

export default ProtectedRoute