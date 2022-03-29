import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listTasks } from '../redux/actions/actionTask';
import { Agregar } from './agenda/Agregar'
import { ListarTareas } from './agenda/ListarTareas'

export const AgendaComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTasks());
  }, [dispatch])

  return (
    <div>
      <Agregar />
      <ListarTareas />
    </div>
  )
}
