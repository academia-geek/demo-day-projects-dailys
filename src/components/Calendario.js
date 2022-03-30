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
  const [day, setDay] = useState(new Date());
  const currentDay = day.getUTCDate();
  const currentMonth = day.getUTCMonth() + 1;
  const currentYear = day.getUTCFullYear();;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const { task } = useSelector(store => store.tarea)
  const [agenda, setAgenda] = useState(task);
  //  const filter = agenda.filter(p=> p.hora)
//  console.log(filter)
 console.log(task)
  // const [month, dia, year]       = [agenda.getMonth(), task.getDate(), task.getFullYear()];
  const currentOne = task.find((p) => p.dia === currentDay)
  
  console.log(currentOne)

  const abcd = () =>{
    if(currentOne.mes !== undefined){
      console.log(currentOne.mes)
    } else{
      console.log('hola')
    }
  }

  useEffect(() => {
    dispatch(listTasks());
    abcd()
  }, [dispatch])
 

  
  return (
    <div>
      <HomeComponent />
      <div className='calendar'>
        <Calendar value={day} onClickDay={() => { setShow(true) }} onChange={setDay} />
      </div>

      <>
        <Modal show={show} aria-labelledby="example-custom-modal-styling-title" scrollable={true} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {
              <form >
                <div className='modal-info'>
                  <h2>Programado</h2>
                  <h6>{currentDay}</h6>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Hora</th>
                        <th>Actividad</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>08:34 pm</td>
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