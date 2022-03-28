import React from 'react'
import { Image } from 'react-bootstrap'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
import { Link } from 'react-router-dom'

export const HomeComponent = () => {
    return (
        <div>
            <div className="containerHome">
                <div className="logos">
                    <SwipeableTemporaryDrawer />
                </div>
                <div className="nav-sg d1">
                    <Link to="">
                        <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/cuaderno_2_szskdd_wirxho.png" alt='Tareas'></Image>
                        <h1 className="title" >Tareas</h1>
                    </Link>
                </div>
                <div className="nav-sg d3">
                    <Link to="/calendario">
                        <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/calendario_ia6vj9_sebpfk.png" alt='calendario'></Image>
                        <h1 className="title">Calendario</h1>
                    </Link>
                </div>
                <div className="nav-sg d6">
                    <Link to="/Perfil">
                        <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                        <h1 className="title">Perfil</h1>
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
                    <Link to="/Perfil">
                        <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                    </Link>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}
