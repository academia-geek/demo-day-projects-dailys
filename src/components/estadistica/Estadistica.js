import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listTasks } from '../../redux/actions/actionTask';
import { Listar } from './Listar'
import { Listaremociones } from './Listaremociones';
import { Rangoe } from './Rangoe';
import { Rendimiento } from './Rendimiento';
import { TabTask } from './TabTask';
import "../../styles/estadistica/est.css"
import { Link } from 'react-router-dom';

export const Estadistica = () => {

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(listTasks());
  }, [dispatch])
    // const usuario = { codigo: "hNC06GXRN8YdvSzwpgJM8oFv9I73"}
    // localStorage.setItem('users', JSON.stringify(usuario))
    
    return (
        <div>
            
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active botones"
                    id="pills-total-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-total"
                    type="button"
                    role="tab"
                    aria-controls="pills-home" 
                    aria-selected="true">Tareas</button>
                </li>
               
                <li class="nav-item" role="presentation">
                    <button className="nav-link botones"
                    id="pills-emociones-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-emociones"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false">Emociones</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-total" role="tabpanel" aria-labelledby="pills-total-tab">

                    <Listar />

                    <TabTask />
                    <Rendimiento />

                </div>
                
                <div className="tab-pane fade" id="pills-emociones" role="tabpanel" aria-labelledby="pills-emociones-tab">
                    
                    <Listaremociones />
                    <Rangoe/>
               
                </div>
            </div>
            
            
            
            
        </div>
    )
}