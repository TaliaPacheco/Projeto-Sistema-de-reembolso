import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";

import { SignUp } from "../pages/Signup";
import { SignIn } from "../pages/Signin";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}