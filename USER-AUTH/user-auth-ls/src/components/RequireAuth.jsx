import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Protects routes. If not authenticated, redirects to /login
 * preserving the location in state so user can be redirected back after login.
 */
export default function RequireAuth() {
  const { token, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>Checking authentication...</div>;

  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
