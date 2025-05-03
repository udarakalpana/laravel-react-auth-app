import React from 'react';
import { Route, Routes } from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path='/dashboard'
                element={
                    <ProtectedRoute>
                        <div>Dashboard</div>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
