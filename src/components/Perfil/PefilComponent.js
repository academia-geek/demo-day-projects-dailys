import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListperfilSync } from '../../redux/actions/actionPerfil';
import { HomeComponent } from '../Navbar/Home/HomeComponent'
import {ListPerfil} from './ListPerfil'

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
      <ListPerfil dates={data}/>
      <h5 className="card-title">Logros y recompensas</h5>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-titles">Recompensa por Cumplir</h5>
              <p className="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-titles">Recompensa por Cumplir</h5>
              <p className="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-titles">Recompensa por Cumplir</h5>
              <p className="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-titles">Recompensa por Cumplir</h5>
              <p className="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-titles">Recompensa por Cumplir</h5>
              <p className="card-text">10/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}