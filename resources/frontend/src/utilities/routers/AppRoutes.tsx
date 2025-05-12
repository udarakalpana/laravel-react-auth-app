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
import Products from "../../components/products/Products.tsx";
import { RootState } from "../../store.tsx";

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
                        <Products />
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
