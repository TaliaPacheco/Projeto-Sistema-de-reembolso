import { BrowserRouter } from "react-router";
import { useAuth } from "../contexts/AuthContext";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes(){
    const { user } = useAuth()

    function renderRoutes(){
        if (!user) {
            return <AuthRoutes />
        }

        switch (user.role) {
            case "employee":
                return <EmployeeRoutes />
            case "manager":
                return <ManagerRoutes />
            default:
                return <AuthRoutes />
        }
    }

    return (
        <BrowserRouter>
            {renderRoutes()}
        </BrowserRouter>
    )
}