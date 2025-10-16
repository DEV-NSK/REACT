import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Protected Dashboard</h2>
      <p>Welcome, <strong>{user?.email}</strong></p>
      <p>This is a protected route — only visible when logged in.</p>

      <button onClick={() => logout()} style={{ padding: "6px 12px" }}>
        Logout
      </button>
    </div>
  );
}
