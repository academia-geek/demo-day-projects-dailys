import React, { useEffect } from 'react'
import { Listar } from './Listar'
import { useDispatch } from 'react-redux';
import {listTasks} from '../../redux/actions/actionTask'
import { HomeComponent } from '../Navbar/Home/HomeComponent';

export const EstadisticaCompo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTasks());
    }, [dispatch])
    return (
        <div>
            <HomeComponent />
            <Listar />
        </div>
    )
}