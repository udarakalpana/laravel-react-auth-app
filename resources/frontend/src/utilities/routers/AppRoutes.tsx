import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";
import { useSelector } from "react-redux";
import {
    checkUserAuthentication,
    checkUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./CheckUserAuthentication.ts";
import { Navigate } from "react-router-dom";

interface RootState {
    auth: {
        token: string;
        user_id: string | null;
        user_role: number;
        isAuthenticated: boolean;
    };
}
const AppRoutes: React.FC = () => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                    checkUserAuthentication(isAuthenticated) &&
                    checkUserTokenNotEmpty(token) &&
                    checkUserIsAdmin(user_role) ? (
                        <div>Dashboard</div>
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
