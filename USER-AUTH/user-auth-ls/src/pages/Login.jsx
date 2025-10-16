import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("user@example.com"); // prefill demo credentials
  const [password, setPassword] = useState("password");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      // redirect back to the page user tried to access
      navigate(from, { replace: true });
    } catch (err) {
      // fakeApi rejects with { message: 'Invalid credentials' }
      setError(err.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", width: "100%", padding: 8 }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ display: "block", width: "100%", padding: 8 }}
            />
          </label>
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <hr />
      <p>
        Demo credentials: <br />
        <strong>user@example.com</strong> / <strong>password</strong>
      </p>
    </div>
  );
}
