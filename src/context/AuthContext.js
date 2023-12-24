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
            credentials: 'include',
        });

        if (response.ok) {
            console.log(response)
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
            credentials: 'include',
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

        const register = async (name , email, password) => {

              const url = 'http://localhost:8001/api/register';
              const body = {
                name: name,
                email: email,
                password: password,
            };
        try{const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Registro exitoso:', data);
        } else {
            console.error('Error en el registro:', data.errors || data.message);
        }
    } catch (error) {
        console.error('Error en la petición:', error);
    }
        };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
