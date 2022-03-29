import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {HomeComponent} from './Navbar/Home/HomeComponent'

const Calendario = () => {
  return (
    <div>
      <HomeComponent />
      <div className='calendar'>
        <Calendar />
      </div>
    </div>

  )
}

export default Calendario