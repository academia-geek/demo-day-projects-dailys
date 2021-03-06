import React from 'react'
import Comentarios from './Welcome.js/Comentarios'
import Consejos from './Welcome.js/Consejos'
import Cualidades from './Welcome.js/Cualidades'
import Header from './Welcome.js/Header'
import "../styles/landing/stylesLanding.css"
import Footer from './Welcome.js/Footer'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <div className='imagen-bienvenida'>
        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647724628/productividad_lpg5rx.jpg' alt='' />
      </div>
      <div className='main'>
        <h2>Organización practicidad y eficiencia siempre a la mano</h2>
        <p>
          En Dailys encontrarás diferentes herramientas que te ayudarán en el día a día a ser más organizado y mejorar tú rendimiento para el cumplimiento de actividades y metas.
        </p>
        <Link to="/registro"><button className='init'> Comenzar</button></Link>
      </div>
      <Cualidades />
      <Comentarios />
      <Consejos />

      <Footer/>
    </div>
  )
}

export default WelcomePage