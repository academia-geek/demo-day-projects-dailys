import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeTemAle } from '../components/HomeTemAle';
import { PefilComponent } from '../components/Perfil/PefilComponent';
import { Home } from '../containers/Home';
import Calendario from '../components/Calendario'
import { Estadistica } from '../components/estadistica/Estadistica';
import Emociones from '../components/Emociones'
import { LastEncuesta } from '../components/Encuesta/LastEncuesta';
import { Premio } from '../components/Perfil/Premio';

function DasRouterUser() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/herramientas" element={<HomeTemAle />} />
            <Route path="/Perfil" element={<PefilComponent />} />
            <Route path="/Encuest" element={<LastEncuesta />} />
            <Route path="/estadistica" element={<Estadistica />} />
            <Route path="/Emociones" element={<Emociones />} />
            <Route path="/Premio" element={<Premio />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default DasRouterUser;