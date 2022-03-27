import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { listTasks } from '../redux/actions/actionTask';
import { Agregar } from './Agregar'
import { ListarTareas } from './ListarTareas'

export const Agenda = () => {
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
