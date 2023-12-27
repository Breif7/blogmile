import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
      const [auth, setAuth] = useState({ user: null, token: null });
      const [statusMessage, setStatusMessage] = useState('');

        const login = async (email, password) => {
         try{   
        const response = await fetch('http://localhost:8001/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        });

        if (response.ok) {
            const userData = await response.json();
            setAuth({ user: userData.user, token: userData.token });
            setStatusMessage('¡Inicio de sesión exitoso!');
            } else {
                setStatusMessage('Error al iniciar sesión. Por favor, verifica tus credenciales.');
                }
            }catch{
                setStatusMessage('Error de conexión al intentar iniciar sesión.');
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
            setAuth({ user: null, token: null });
            } else {
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
            try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`,
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
            <AuthContext.Provider value={{ auth, statusMessage, setStatusMessage, login, logout, register }}>
                {children}
            </AuthContext.Provider>
            );
};
