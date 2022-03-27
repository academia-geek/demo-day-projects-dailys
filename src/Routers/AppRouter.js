import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro';
import WelcomePage from '../components/WelcomePage';
import DasRouterUser from './DasRouterUser';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {

    const [isLoggedId, setIsLoggedId] = useState(false);

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedId(true)
            } else {
                setIsLoggedId(false)
            }
            setChecking(false)
        })
    }, []);
    if (checking) {
        return <h1>Espere...</h1>;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PublicRoutes isAuthenticated={isLoggedId}>
                        <WelcomePage />
                    </PublicRoutes>
                }
                />
                <Route path="/login" element={
                    <PublicRoutes isAuthenticated={isLoggedId}>
                        <Login />
                    </PublicRoutes>
                }
                />
                <Route path="/registro" element={
                    <PublicRoutes isAuthenticated={isLoggedId}>
                        <Registro />
                    </PublicRoutes>
                }
                />
                <Route path="/*" element={
                    <PrivateRoutes isAuthenticated={isLoggedId}>
                        <DasRouterUser />
                    </PrivateRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter