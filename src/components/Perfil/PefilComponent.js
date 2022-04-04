import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListperfilSync } from '../../redux/actions/actionPerfil';
import { HomeComponent } from '../Navbar/Home/HomeComponent'
import { ListPerfil } from './ListPerfil'
import { Recompensas } from './Recompensas';

export const PefilComponent = () => {

  const dispatch = useDispatch();

  const { perfil } = useSelector(store => store.perfil);

  const uids = JSON.parse(localStorage.getItem("users"))
  
  const data = perfil.filter(user => user.codigo === uids.codigo)

  useEffect(() => {
    dispatch(ListperfilSync())
  }, [dispatch])

  return (
    <div>
      <HomeComponent />
      <ListPerfil dates={data} />
      <h5 className="card-title">Logros y recompensas</h5>
      <Recompensas />
    </div>
  )
}