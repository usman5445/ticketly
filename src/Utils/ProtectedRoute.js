import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//it will authorize to child route only if Role prop is same as userType else it will go to login
export const ProtectedRoute = ({ ROLE }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.userTypes === ROLE ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace />
  );
};
