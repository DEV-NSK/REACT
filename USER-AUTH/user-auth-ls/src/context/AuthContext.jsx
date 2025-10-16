import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

/**
 * Simple AuthContext that:
 * - loads token/user from localStorage on mount
 * - exposes login(email,password) and logout()
 * - keeps token in axios.defaults.headers.common["Authorization"]
 *
 * NOTE: swap the fakeAuthApi with real axios POST in production.
 */

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// ---- Fake auth for demo ----
const fakeAuthApi = {
  login: (email, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // demo credential: user@example.com / password
        if (email === "user@example.com" && password === "password") {
          resolve({
            token: "fake-jwt-token-12345",
            user: { id: 1, email },
            expiresIn: 60 * 60 * 1000, // 1 hour
          });
        } else {
          reject({ message: "Invalid credentials" });
        }
      }, 600);
    }),
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // app-level load while checking localStorage

  useEffect(() => {
    // load from localStorage
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    const savedExpiry = localStorage.getItem("tokenExpiry");

    if (savedToken && savedExpiry && Date.now() < Number(savedExpiry)) {
      setToken(savedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
      if (savedUser) setUser(JSON.parse(savedUser));
    } else {
      // expired or not present -> clear
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpiry");
    }
    setLoading(false);
  }, []);

  // login: replace fakeAuthApi with real axios call to backend like:
  // const res = await axios.post('/auth/login', { email, password });
  // const { token, user, expiresIn } = res.data;
  const login = async (email, password) => {
    const res = await fakeAuthApi.login(email, password); // swap this line
    const token = res.token;
    const user = res.user;
    const expiresIn = res.expiresIn || 60 * 60 * 1000; // ms

    const expiryTime = Date.now() + expiresIn;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("tokenExpiry", String(expiryTime));

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpiry");
    delete axios.defaults.headers.common["Authorization"];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
