import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = "*El email es requerido";
    if (!password) validationErrors.password = "*La contraseña es requerida";

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors)
      return;
    }

    try {
      const res = await fetch("/data/users.json")
      const users = await res.json();
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!foundUser) {
        setError({ email: "credenciales inválidas" });
      } else {
        if (foundUser.role === "admin") {
          setIsAuth(true)
          localStorage.setItem("isAuth", true);
        }
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (err) {
      setError({ email: "Algo salió mal. Por favor, inténtelo más tarde" })
    }
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    navigate("/", { replace: true });
  }

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, error, setError, handleSubmit, isAuth, setIsAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);