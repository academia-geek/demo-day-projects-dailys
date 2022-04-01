import React, { useEffect } from 'react'
import { Listar } from './Listar'
import { listEstadist } from '../../redux/actions/actionTask'
import { useDispatch } from 'react-redux';

export const Estadistica = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEstadist());
    }, [dispatch])
    return (
        <div>
            <Listar />
        </div>
    )
}