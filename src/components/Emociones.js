import { Modal,  Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddEmocionesASync, listEmocionesFrasesAsync } from '../redux/actions/actionEmociones';


const Emociones = () => {
    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const year = fecha.getUTCFullYear();
    const [show, setShow] = useState(false);
    const [emocion, setEmocion] = useState();
    const [mensaje, setMensaje] = useState(0);
    const [info, setInfo] = useState()
    const { frases } = useSelector((store) => store.emociones)
    const [añadir, setAñadir] = useState({})
    console.log(emocion)

    const handleClose = () => setShow(false);
    const aleatorio = Math.floor((Math.random() * 5) + 0)

    const user = JSON.parse(localStorage.getItem('users'))
    const { name, email, codigo} = user

 console.log(codigo)

    const dispatch = useDispatch();

    let [asnwer, setAnswer] = useState();

    const handleOnChange = (e) => {
        setAnswer(e.target.value)
        console.log(asnwer)
    }

    

      const informa = {
        dia: day,
        mes: month,
        año: year,
        codigo: codigo,
        asnwer : asnwer
    }

    console.log(informa)
    const enviarInfo = (e) => {
        
        dispatch(AddEmocionesASync(informa))
        setShow(false)
    }

    const validacion = (e) => {
        e.preventDefault()
        if (asnwer === "1" || asnwer === "2") {
            setEmocion(frases[0].feliz)
            setMensaje(aleatorio) 
            setShow(true)
        } else if (asnwer === "3" || asnwer === "4") {
            setEmocion(frases[1].triste)
            setMensaje(aleatorio)
            setShow(true) 
        }  else if (asnwer === "5") {
            setEmocion(frases[2].mal)
            setMensaje(aleatorio) 
            setShow(true)
        }
    }

    useEffect(() => {
        dispatch(listEmocionesFrasesAsync());


    }, []);
    return (
        <div>
          
            <div className='subDivEmociones'>
            <img className='cat' src="https://res.cloudinary.com/paolavbm/image/upload/v1648782823/a837c5c796c1daf0583b7ac1338952c6_iwwiii.jpg" alt='' width={200}/>
                <h2>Hola {name}</h2>
                <h4>¿Cómo te sientes el día de hoy?</h4>
                {/* <h2>{day} / {month} / {year}</h2> */}

                <div className="emociones">
                    {/* <input type="button" className='caritas'  value="1" onClick={handleOnChange}><img src='https://res.cloudinary.com/paolavbm/image/upload/v1648686956/feliz_wxbvxo.png' alt='' width={100} /></input> */}

                    {/*                     
                     <input type="button" value="1" onClick={handleOnChange}/>
                    <button className='caritas'  value="2" onClick={handleOnChange}><img src='https://res.cloudinary.com/paolavbm/image/upload/v1648686956/happy-face_yapson.png' alt='' width={100} /></button>
                    <button className='caritas'  value="3" onClick={handleOnChange}><img src='https://res.cloudinary.com/paolavbm/image/upload/v1648686935/aburrido_1_hespzj.png' alt='' width={100} /></button> <br />
                    <button className='caritas'  value="4" onClick={handleOnChange}><img src='https://res.cloudinary.com/paolavbm/image/upload/v1648686935/cara-triste-en-cuadrado-redondeado_rwkpnb.png' alt='' width={100} /></button>
                    <button className='caritas'  value="5" onClick={handleOnChange}><img src='https://res.cloudinary.com/paolavbm/image/upload/v1648686935/muerto_df1akx.png' alt='' width={100} /></button> */}



                    <div class="">
                        <div class="select">
                            <label for="emocion" class="col-25"></label><br />
                            <input type="radio" name="emociones" id="feliz" class="input-hidden" value="1" onChange={handleOnChange} />
                            <label for="feliz"><img src="https://res.cloudinary.com/paolavbm/image/upload/v1648686956/happy-face_yapson.png" width={100} alt="" required /></label>
                            <input type="radio" name="emociones" id="muyFeliz" className="input-hidden" value="2" onChange={handleOnChange} />
                            <label for="muyFeliz" id="hm"><img width={100} src="https://res.cloudinary.com/paolavbm/image/upload/v1648686956/feliz_wxbvxo.png" alt="" required /></label>
                            <input type="radio" name="emociones" id="bored" className="input-hidden" value="3" onClick={handleOnChange} />
                            <label for="bored" id="hm"><img width={100} src="https://res.cloudinary.com/paolavbm/image/upload/v1648686935/aburrido_1_hespzj.png" alt="" required /></label> 

                            <input type="radio" name="emociones" id="sad" className="input-hidden" value="4" onClick={handleOnChange} />
                            <label for="sad" id="hm"><img width={100} src="https://res.cloudinary.com/paolavbm/image/upload/v1648686935/cara-triste-en-cuadrado-redondeado_rwkpnb.png" alt="" required /></label>

                            <input type="radio" name="emociones" id="dead" className="input-hidden" value="5" onClick={handleOnChange} />
                            <label for="dead" id="hm"><img width={100} src='https://res.cloudinary.com/paolavbm/image/upload/v1648686935/muerto_df1akx.png' alt="" required /></label> <br />


                        </div>
                    </div>



                </div>
            </div>

            <div className='boton-guardar'>
                <button className='guardar' onClick={validacion}>Guardar</button>

            </div>

            { 
             emocion !== undefined
             ?
             <>
        <Modal show={show} aria-labelledby="example-custom-modal-styling-title" scrollable={true} onHide={handleClose} className="modal">
          {/* <Modal.Header closeButton>
          </Modal.Header> */}
          <Modal.Body> 

          <img className='cat' src="https://res.cloudinary.com/paolavbm/image/upload/v1648782796/ebe4c9e75f78f80477a2e4ef2a640663_jgm1r3.jpg" alt='' width={150}/> <br/>
            <h5>¡Gracias por confiar en nosotros!</h5>
            
          <h4>{emocion[mensaje]}</h4>
          <Button className="aceptar" onClick={enviarInfo}>Aceptar</Button>
          </Modal.Body>

        </Modal>
      </>
           
            
             : ""
            }


        </div>
    )
}

export default Emociones