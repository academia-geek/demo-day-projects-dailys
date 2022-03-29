import React from 'react'
import { Image } from 'react-bootstrap'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { logoutAsync } from '../../../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';

export const HomeComponent = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAsync());
        Navigate("/")
    }
    return (
        <div>
            <div className="containerHome">
                <div className="logos">
                    <SwipeableTemporaryDrawer />
                </div>
                <div className="nav-sg d1">
                    <Link to="/home">
                        <h1 className="title" >Inicio</h1>
                    </Link>
                </div>
                <div className="nav-sg d6"> 
                    <Link to="/" onClick={() => handleLogout()}>
                        <h1 className="title">Cerrar sesión</h1>
                    </Link>
                </div>
            </div>
            <div className="navMobile">
                <div className="nav-sd">
                    <SwipeableTemporaryDrawer />
                </div>
                <div className="nav-sd">
                    <Link to="">
                        <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903757/lista-de-tareas_zk7yif.png" alt='Tareas'></Image>
                    </Link>
                </div>
                <div className="nav-sd">
                    <Link to="/calendario">
                        <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/calendario_3_gcsfru.png" alt='calendario'></Image>
                    </Link>
                </div>
                <div className="nav-sd">
                    <Link to="/Perfil" >
                        <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                    </Link>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}
