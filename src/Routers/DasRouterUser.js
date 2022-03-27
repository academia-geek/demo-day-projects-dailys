import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home'
import CalendarioCompo from '../components/CalendarioCompo'

function DasRouterUser() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendario" element={<CalendarioCompo />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default DasRouterUser;