import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendario from '../components/Calendario';
import Login from '../components/Login';
import Registro from '../components/Registro';
import WelcomePage from '../components/WelcomePage';
import PublicRoutes from './PublicRoute';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, []);
    if (checking) {
        return <h1>Espere...</h1>;
    }
    return (
        <>

            <BrowserRouter>
                <Routes>


                    <Route
                        path="/welcome"
                        element={
                            <PublicRoutes isAuthenticated={isLoggedIn}>
                                <WelcomePage />
                            </PublicRoutes>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <PublicRoutes isAuthenticated={isLoggedIn}>
                                <Login />
                            </PublicRoutes>
                        }
                    />


                    <Route
                        path="/registro"
                        element={
                            <PublicRoutes isAuthenticated={isLoggedIn}>
                                <Registro />
                            </PublicRoutes>
                        }
                    />


                    <Route
                        path="/calendar"
                        element={
                            <PublicRoutes isAuthenticated={isLoggedIn}>
                                <Calendario/>
                            </PublicRoutes>
                        }
                    />



                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter