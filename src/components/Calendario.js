import { Modal, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { HomeComponent } from './Navbar/Home/HomeComponent'
import { useDispatch, useSelector } from 'react-redux';
import { listTasks } from '../redux/actions/actionTask';
import { fil } from 'date-fns/locale';

const Calendario = () => {
  const [show, setShow] = useState(false);
  const [dat, setDat] = useState([]);
  const [day, setDay] = useState(new Date());
  const currentDay = day.getUTCDate();
  const currentMonth = day.getUTCMonth() + 1;
  const currentYear = day.getUTCFullYear();;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const { task } = useSelector(store => store.tarea)

  //  const filter = agenda.filter(p=> p.hora)
  //  console.log(filter)
  // const [month, dia, year]       = [agenda.getMonth(), task.getDate(), task.getFullYear()];

  const uids = JSON.parse(localStorage.getItem("users"))


  const osd = () => {
    setShow(true)
    const data = task.filter(user => {
      if (user.idUser === uids.codigo && user.dia === currentDay && user.mes === currentMonth && user.año === currentYear) {
        return user;
      }
    })
    console.log(data)
    setDat(data)

  }

  useEffect(() => {
    dispatch(listTasks());

  }, [dispatch])



  return (
    <div>
      <HomeComponent />
      <div className='calendar'>
        <Calendar value={day} onClickDay={() => osd()} onChange={setDay} />
      </div>

      <>
        <Modal show={show} aria-labelledby="example-custom-modal-styling-title" scrollable={true} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {
              <form >
                {
                  (dat) ? (
                    dat.map((element, index) => (
                      <div className='modal-info'>
                        <h2>Programado</h2>
                        <h6>{currentDay}</h6>
                        <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th>hora</th>
                              <th>Actividad</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{element.hora}:{element.minutos}</td>
                              <td>Sacar al perro</td>

                            </tr>
                            <tr>
                              <td>08:34 pm</td>
                              <td>Sacar al perro</td>

                            </tr>
                            <tr>
                              <td>08:34 pm</td>
                              <td colSpan={2}>Sacar al perro</td>

                            </tr>
                          </tbody>
                        </Table>
                        <button type='submit' >Guardar</button>
                      </div>
                    ))

                  ) : ""
                }
              </form>
            }
          </Modal.Body>

        </Modal>
      </>

      <div className="eventos">

        <h4>Eventos especiales:</h4>
        <p>-Like a RockStar</p>
        <p>- Slumber party</p>
      </div>




      <div className="metas">

        <h4>Metas del mes:</h4>
        <p>-Like a RockStar</p>
        <p>- Slumber party</p>

      </div>
    </div>

  )
}

export default Calendario