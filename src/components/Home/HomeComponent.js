import React from 'react'
import { Image } from 'react-bootstrap'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'

export const HomeComponent = () => {

    return (

        <div>
            
            <div className="containerHome">
                <div className="logos">
                    <SwipeableTemporaryDrawer />
                </div>
                <div className="nav-sg d1">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/cuaderno_2_szskdd_wirxho.png" alt='Tareas'></Image>
                    <h1 className="title" >Tareas</h1>
                </div>
                <div className="nav-sg d3">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/calendario_ia6vj9_sebpfk.png" alt='calendario'></Image>
                    <h1 className="title">Calendario</h1>
                </div>
                <div className="nav-sg d6">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                    <h1 className="title">Perfil</h1>
                </div>
            </div>
            <div className="navMobile">
                <div className="nav-sd">
                    <SwipeableTemporaryDrawer />
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903757/lista-de-tareas_zk7yif.png" alt='Tareas'></Image>
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/calendario_3_gcsfru.png" alt='calendario'></Image>
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}
