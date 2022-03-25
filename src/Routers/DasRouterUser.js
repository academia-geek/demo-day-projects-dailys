import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'

function DasRouterUser() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default DasRouterUser;