import React from 'react'
import "../../styles/landing/stylesLanding.css"

const Consejos = () => {
    return (
        <div className='container-articulos'>

            <h4>Artículos que te pueden interesar</h4>


            <div className='consejos-cards'>
                <a target="_blank" href='https://masymejor.com/ejemplos-de-productividad/'>
                    <div className='card1'>
                        <div className='img'>
                            <img className='titulo-consejo' src='https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Calidad-y-productividad-3000x2994.png' width={200} alt='' />
                        </div>

                        <div className='info'>
                            <h4>Productividad</h4>
                            <p>Todo lo que necesitas saber sobre la productividad.</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href='https://www.infoautonomos.com/blog/general/productividad-quieres-ser-mas-eficaz-en-el-trabajo-adopta-la-tecnica-japonesa-de-las-5-s/'>

                    <div className='card1'>
                        <div className='img'>
                            <img className='titulo-consejo' src='https://thumbs.dreamstime.com/b/la-mujer-de-negocios-est%C3%A1-pie-y-sostiene-una-cartera-documentos-con-iconos-oficina-en-el-fondo-concepto-multitarea-gesti%C3%B3n-del-185215049.jpg' height={200} width={200} alt='' />
                        </div>

                        <div className='info'>
                            <h4>Trabajo</h4>
                            <p>Diez claves para mejorar tú productividad en el trabajo.</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href='https://asana.com/es/resources/time-management-tips'>
                    <div className='card1'>
                        <div className='img'>
                            <img className='titulo-consejo' src='https://thumbs.dreamstime.com/b/manejo-del-tiempo-yoga-pose-girl-joven-empresaria-rodeada-de-%C3%ADconos-negocios-que-meditan-dentro-la-cara-reloj-car%C3%A1cter-trabajo-170949946.jpg' height={200} width={200} alt='' />
                        </div>

                        <div className='info'>
                            <h4>Manejo de tiempo</h4>
                            <p>Algunos tips para el manejo del tiempo.</p>
                        </div>
                    </div>
                </a>

                <a target="_blank" href='https://ikigaimatsuri.com/10-habitos-japoneses/#:~:text=Para%20hacer%20lo%20que%20te,seguro%20hacia%20una%20mejor%20vida.'>
                <div className='card1'>
                    <div className='img'>
                        <img className='titulo-consejo' src='https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-vectorial-abstracta-de-estilo-vida-minimalista-consumo-reducir-compra-simple-vivir-menos-carga-financiera-bajo-gastos-229453364.jpg' width={200} alt='' />
                    </div>

                    <div className='info'>
                        <h4>Estilo de vida</h4>
                        <p>Llevar un estilo de vida más pleno y organizado.</p>
                    </div>
                </div>
                </a>

                <a target="_blank" href='https://mejorconsalud.as.com/organizar-mi-vida-recomendaciones/'>
                    <div className='card1'>
                        <div className='img'>
                            <img className='titulo-consejo' src='https://www.sesametime.com/assets/wp-content/uploads/2020/01/guia-analizar-indicadores-productividad-300x242.jpg' width={200} height={200} alt='' />
                        </div>

                        <div className='info'>
                            <h4>Guía de organización</h4>
                            <p>Una guía simple para organizarte en tú día a día.</p>
                        </div>
                    </div>

                </a>


            </div>
        </div>
    )
}

export default Consejos