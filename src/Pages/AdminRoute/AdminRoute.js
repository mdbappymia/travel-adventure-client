import React from "react";
import { Navigate, useLocation } from "react-router";
import useStore from "../../hooks/useStore";

const AdminRoute = ({ children }) => {
  const { admin, adminLoading } = useStore();
  const location = useLocation();
  if (adminLoading) {
    return <h1 style={{ height: "100vh", textAlign: "center" }}>Loading...</h1>;
  }
  if (admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
