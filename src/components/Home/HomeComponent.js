import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { AgendaComponent } from './AgendaComponent';
import { TareaComponent } from './TareaComponent';

export const HomeComponent = () => {

    const [tarea, setTarea] = useState(true);

    const [agenda, setAgenda] = useState(false);

    const handleTarea = () => {
        setTarea(true)
        setAgenda(false)
    }
    const handleAgenda = () => {
        setTarea(false);
        setAgenda(true)
    }
    return (
        <div>
            <div className="containerHome">
                <div className="logos"></div>
                <div className="nav-sg d1" onClick={handleTarea}>
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/cuaderno_2_szskdd_wirxho.png" alt='Tareas'></Image>
                    <h1 className="title" >Tareas</h1>
                </div>
                <div className="nav-sg d2" onClick={handleAgenda}>
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647905480/contactos_3_cu60sy.png" alt='agenda'></Image>
                    <h1 className="title" > Agenda</h1>
                </div>
                <div className="nav-sg d3">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/calendario_ia6vj9_sebpfk.png" alt='calendario'></Image>
                    <h1 className="title">Calendario</h1>
                </div>
                <div className="nav-sg d4">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903768/barra-grafica_yqegb2_g6aawj.png" alt='estadistica'></Image>
                    <h1 className="title">Estadistica</h1>
                </div>
                <div className="nav-sg d5">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903757/lista-de-tareas_zk7yif.png" alt='encuesta'></Image>
                    <h1 className="title">Encuesta</h1>
                </div>
                <div className="nav-sg d6">
                    <Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                    <h1 className="title">Perfil</h1>
                </div>
            </div>
            <div className="navMobile">
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/lista_1_dexdcr.png" alt='Menu' onClick={handleTarea}></Image>
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903757/lista-de-tareas_zk7yif.png" alt='Tareas' onClick={handleAgenda}></Image>
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/calendario_3_gcsfru.png" alt='calendario'></Image>
                </div>
                <div className="nav-sd">
                    <Image className="imgNav" src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/perfil-del-usuario_imntjy.png" alt='perfil'></Image>
                </div>
            </div>
            <div className="content">
                {
                    tarea === true ? <TareaComponent /> : ''
                }
                {
                    agenda === true ? <AgendaComponent /> : ''
                }
            </div>
        </div>
    )
}
