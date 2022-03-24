import React from 'react'
import "../../styles/landing/stylesLanding.css"

const Consejos = () => {
    return (
        <div className='container-articulos'>

            <h3>Articulos que te pueden interesar</h3>

            <div className='consejos-cards'>
                <div className='card'>
                    <div className='img'>
                        <img src='https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Calidad-y-productividad-3000x2994.png' width={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Productividad</h4>
                        <p>Todo lo que necesitas saber sobre la productividad</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src='https://thumbs.dreamstime.com/b/la-mujer-de-negocios-est%C3%A1-pie-y-sostiene-una-cartera-documentos-con-iconos-oficina-en-el-fondo-concepto-multitarea-gesti%C3%B3n-del-185215049.jpg' height={200} width={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Trabajo</h4>
                        <p>Diez claves para mejorar tú productividad en el trabajo</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src='https://thumbs.dreamstime.com/b/manejo-del-tiempo-yoga-pose-girl-joven-empresaria-rodeada-de-%C3%ADconos-negocios-que-meditan-dentro-la-cara-reloj-car%C3%A1cter-trabajo-170949946.jpg' height={200} width={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Manejo de tiempo</h4>
                        <p>Todo lo que necesitas saber sobre la productividad</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src='https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-vectorial-abstracta-de-estilo-vida-minimalista-consumo-reducir-compra-simple-vivir-menos-carga-financiera-bajo-gastos-229453364.jpg' width={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Estilo de vida</h4>
                        <p>Todo lo que necesitas saber sobre la productividad</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src='https://www.sesametime.com/assets/wp-content/uploads/2020/01/guia-analizar-indicadores-productividad-300x242.jpg' width={200}  height={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Guia de organización</h4>
                        <p>Todo lo que necesitas saber sobre la productividad</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Consejos