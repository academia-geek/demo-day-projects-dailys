import { Navigate, Route, Routes } from 'react-router-dom'
import {Home} from '../components/Navbar/Home'
import CalendarioCompo from '../components/CalendarioCompo'
import { HomeTemAle } from '../components/HomeTemAle';
import { PefilComponent } from '../components/Perfil/PefilComponent';

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