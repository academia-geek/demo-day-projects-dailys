import { Navigate, Route, Routes } from 'react-router-dom'
import CalendarioCompo from '../components/CalendarioCompo'
import { HomeTemAle } from '../components/HomeTemAle';
import { PefilComponent } from '../components/Perfil/PefilComponent';
import { Home } from '../containers/Home';

function DasRouterUser() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendario" element={<CalendarioCompo />} />
            <Route path="/herramientas" element={<HomeTemAle />} />
            <Route path="/Perfil" element={<PefilComponent />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default DasRouterUser;