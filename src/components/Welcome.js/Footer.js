import React from 'react'
import {DivFooter, DivCols, DivContCol, DivFlex, ImgRedes} from  "../../styles/landing/styledLanding"
import "../../styles/landing/stylesLanding.css"

const Footer = () => {
    
  return (   
    <DivFooter>
                  <h2 className='brand2'>  Dailys</h2>
            <DivContCol>

            <DivCols>
                <h6>¿Por qué Dailys?</h6>
                <h6>Dailys en comparación con otras to do list</h6>
                <h6>Motivación</h6>
                <h6>Ver demostración</h6>
                </DivCols>


                <DivCols>
                    <DivFlex >
                        <div>
                        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-phone_unlqo4.svg' alt='' />
                        </div>
                    <p> +57-322-979-4567</p>
                    </DivFlex >
                    <DivFlex>
                        <div>
                        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-email_wm7dym.svg' alt='' />
                        </div>
                        <p>dailys1202@gmail.com</p>
                    </DivFlex>
                </DivCols>


                <DivCols>
                <h6>Sobre nosotros</h6>
                <h6>Educación</h6>
                <h6>Soluciones</h6>
                <h6>Blog</h6>
                </DivCols>


                <DivCols>
                <h6>Contáctanos</h6>
                <h6>Términos</h6>
                <h6>Privacidad</h6>  
                </DivCols>


                <DivCols className='redes'>
                    <ImgRedes  width={30} src='https://res.cloudinary.com/paolavbm/image/upload/v1646545875/reto1%20spring3/instagram_2_nif1sg.png' alt=''/>
                    <ImgRedes width={30}  src='https://res.cloudinary.com/paolavbm/image/upload/v1646545874/reto1%20spring3/instagram_1_kcorp9.png' alt=''/>
                    <ImgRedes width={30}  src='https://res.cloudinary.com/paolavbm/image/upload/v1646545877/reto1%20spring3/instagram_3_finx7f.png' alt=''/>
                </DivCols>

            </DivContCol>
        </DivFooter>
          
    
  )
}

export default Footer