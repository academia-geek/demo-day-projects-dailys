import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeTemAle } from '../components/HomeTemAle';
import { PefilComponent } from '../components/Perfil/PefilComponent';
import { Home } from '../containers/Home';
import  Calendario  from '../components/Calendario'
import { EncuestaComponent } from '../components/Encuesta/EncuestaComponent';
import { EstadisticaCompo } from '../components/estadistica/EstadisticaCompo';

function DasRouterUser() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/herramientas" element={<HomeTemAle />} />
            <Route path="/Perfil" element={<PefilComponent />} />
            <Route path="/Encuesta" element={<EncuestaComponent />} />
            <Route path="/estadistica" element={<EstadisticaCompo />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default DasRouterUser;