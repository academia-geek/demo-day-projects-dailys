import React from 'react'
import { Button } from 'react-bootstrap'
import { HomeComponent } from '../Navbar/Home/HomeComponent'

export const PefilComponent = () => {
  const user = JSON.parse(localStorage.getItem('users'))
  const { name, email } = user
  return (
    <div>
      <HomeComponent />
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://thumbs.dreamstime.com/b/el-icono-del-perfil-con-a%C3%B1ade-la-muestra-perfile-y-nuevo-m%C3%A1s-positivo-s%C3%ADmbolo-111945352.jpg" alt="photo"></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Perfil</h5>
              <p class="card-text">Nombre:</p>
              <p class="card-text">{name}</p>
              <p class="card-text"><small class="text-muted">Correo: </small></p>
              <p class="card-text">{email}</p>
              <Button className="botonperfil">Editar perfil</Button>
            </div>
          </div>
        </div>
      </div>
      <h5 class="card-title">Logros y recompensas</h5>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-titles">Recompensa por Cumplir</h5>
              <p class="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-titles">Recompensa por Cumplir</h5>
              <p class="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-titles">Recompensa por Cumplir</h5>
              <p class="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-titles">Recompensa por Cumplir</h5>
              <p class="card-text">10/10</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-titles">Recompensa por Cumplir</h5>
              <p class="card-text">10/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}