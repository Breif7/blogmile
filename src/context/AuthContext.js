import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

        const login = async (email, password) => {
        const response = await fetch('http://localhost:8001/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Manejar la respuesta exitosa (p. ej., almacenar el token, cambiar el estado)
        } else {
            // Manejar errores o mostrar mensajes
            const errorData = await response.json();
            console.error(errorData.error);
        }
        };

    const logout = async () => {
        const response = await fetch('http://localhost:8001/api/logout', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Manejar la respuesta exitosa (p. ej., almacenar el token, cambiar el estado)
        } else {
            // Manejar errores o mostrar mensajes
            const errorData = await response.json();
            console.error(errorData.error);
        }
        };

        const register = async (email, password) => {
        const response = await fetch('http://localhost:8001/api/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            console.log(response)
        } else {
            const errorData = await response.json();
            console.error(errorData.error);
        }
        };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
