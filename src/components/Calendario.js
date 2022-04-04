import { Modal, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { HomeComponent } from './Navbar/Home/HomeComponent'
import { useDispatch, useSelector } from 'react-redux';
import { listTasks } from '../redux/actions/actionTask';

const Calendario = () => {
  const [show, setShow] = useState(false);
  const [dat, setDat] = useState("");
  const [day, setDay] = useState();
  // const currentDay = day.getUTCDate();
  // const currentMonth = day.getUTCMonth() + 1;
  // const currentYear = day.getUTCFullYear();
  
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const { task } = useSelector(store => store.tarea)


  const uids = JSON.parse(localStorage.getItem("users"))
   const codigo = uids.codigo
  const eventos = task.filter((p) => p.idUser === codigo)
  const especiales = eventos.filter((p) => p.selecEvent === "Especial")
  const metas = eventos.filter((p) => p.selecEvent === "Metas")
  console.log(metas)


  console.log(eventos)
  const osd = () => {
    setShow(true)
    if (day === undefined) {
      console.log("Please select")
    } else {
      const data = task.filter(user => {
        if (user.idUser === uids.codigo && user.dia === day.getUTCDate() && user.mes === day.getUTCMonth() + 1 && user.año === day.getUTCFullYear()) {
          return user;
        }
      })
      setDat(data)
    }

  }
  console.log(dat)

  useEffect(() => {
    dispatch(listTasks());

  }, [dispatch])


  console.log(dat)
  return (
    <div>
      <HomeComponent />
      <div className='calendar'>
        <Calendar value={day} onClickDay={() => osd()} onChange={setDay} />
      </div>
      <>
        {
          (show === true) ? (
            <form>
              <div className='modal-info'>
                <h2>Programado</h2>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Hora</th>
                      <th>Actividad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (dat !== "") ? (
                        dat.map((element, index) => (
                          <tr key={index}>
                            <td>{element.hora}:{element.minutos}</td>
                            <td>{element.actividad}</td>
                          </tr>
                        ))
                      ) : ""
                    }
                  </tbody>
                </Table>
              </div>
            </form>
          ) : ''
        }
      </>

      <div className="eventos">

        <h4>Eventos especiales:</h4>
        {
            especiales.map((e, i) => (
              <div key={i} className='' >
               <h5>-{e.actividad}</h5>
              </div>
            ))
          }
      </div>




      <div className="metas">

        <h4>Metas del mes:</h4>
        {
            metas.map((e, i) => (
              <div key={i} className='' >
               <h5>-{e.actividad}</h5>
              </div>
            ))
          }
      </div>
    </div>

  )
}

export default Calendario