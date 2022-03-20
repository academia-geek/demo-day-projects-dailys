import React from 'react'
import Header from './Header'

const WelcomePage = () => {
  return (
    <div className='landingPage'>
        <Header/>

    <div className='imagen-bienvenida'>
      <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647724628/productividad_lpg5rx.jpg' alt=''/>
    </div>

    <div className='main'>
      <h2>Organización practicidad y eficiencia siempre a la mano</h2>
      <p>
    En Dailys encontrarás diferentes herramientas que te ayudarán en el día a día a ser más organizado y mejorar tú rendimiento para el cumplimiento de actividades y metas. 
      </p>

      <button className='init'>Comenzar</button>
    </div>

    </div>
  )
}

export default WelcomePage