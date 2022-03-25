
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated, children }) => {
   return isAuthenticated 
   ? children 
   : <Navigate to="/" />;
};

export default PrivateRoutes;