import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fileUpload } from '../../helpers/FireUpload'
import { editPerfilAsyn } from '../../redux/actions/actionPerfil'

export const ListPerfil = (dates) => {
    const dispatch = useDispatch();
    const perfil = dates.dates[0]
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [goku, setGoku] = useState("")
    const initialState = {}
    const cargarData = () => {
        if (perfil !== undefined) {
            setGoku({
                name: perfil.name,
                email: perfil.email,
                imagen: "",
                codigo: perfil.codigo,
                descripcion: perfil.descripcion
            })
        }
        setShow(true)
    }
    const reset = () => {
        setGoku(initialState);
    }

    const { name, email, descripcion } = goku
    const handleInputChange = ({ target }) => {
        setGoku({
            ...goku,
            [target.name]: target.value
        });

    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp => {
                goku.imagen = resp
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editPerfilAsyn(goku.codigo, goku))
        reset()
        setShow(false)
    }
    return (
        <div>
            {
                perfil !== undefined ?
                    (
                        <div className="card mb-3 pepe">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={perfil.imagen} alt="photos1" className='img-perfil'></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body jum">

                                      <div className='tituloPerfil'>
                                        <h2 className=" picachu">Perfil</h2>
                                     </div>
                                        <div className='perfil-info'>
                                        <p className="jajaja ju">Nombre:</p> <span className="jajaja">{perfil.name}</span>
                                        </div>
                                        <div className='perfil-info'>
                                        <p className="jajaja ju">Correo:</p> <span className="jajaja">{perfil.email}</span>
                                      
                                        </div>
                                        <div className='perfil-info'>
                                        <p className="jajaja ju">Descripción:</p> <span className="jajaja">{perfil.descripcion}</span>

                                        </div>
                                        <Button className="botonperfil" onClick={cargarData}>Editar perfil</Button>
                                    </div>
                                </div>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Editar perfil</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3 inputs">
                                            <Form.Label>Nombre completo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={handleInputChange}
                                                placeholder="Ingrese el nombre"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 inputs">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={handleInputChange}
                                                placeholder="Ingrese el Correo"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 inputs">
                                            <Form.Label>Descripcion del perfil</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="descripcion"
                                                value={descripcion}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label className="textlogin">Imagen perfil</Form.Label>
                                            <Form.Control
                                                type="file"
                                                className="iii"
                                                name="imagen"
                                                onChange={handleFileChange}
                                            />
                                        </Form.Group>
                                        <Button type="submit" onHide={handleClose} className="botonpers">Guardar</Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )
                    : ''
            }
        </div>
    )
}
