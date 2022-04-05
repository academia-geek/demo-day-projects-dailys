import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export const Recompensas = () => {

    const data = JSON.parse(localStorage.getItem("dato"))
    const [fondo, setFondo] = useState("inicial")
    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/2200/2200738.png")
    const [dats, setDats] = useState(0)
    const [dat, setDat] = useState(0)
    const [da, setDa] = useState(0)
    const [d, setD] = useState(0)
    const [buttons, setButtons] = useState(false)

    const valiars = () => {

        const valu = () => {
            if (data.compl >= 0 && data.compl < 5) {
                setDats(data.compl)
                setDat(data.compl)
            } else {
                setFondo("logrado")
                setImage("https://res.cloudinary.com/dsnsjqasu/image/upload/v1649055011/recompensa_y6frir.png")
                setDats(5)
                setButtons(true)
            }
        }
        valu()
        const valu1 = () => {
            if (data.compl >= 0 && data.compl <= 5) {
                setDat(data.compl)
            } else {
                if (data.compl > 5 && data.compl < 10) {
                    setDat(data.compl)
                } else {
                    setDat(10)
                }
            }
        }
        valu1()
        const valu2 = () => {
            if (data.compl >= 0 && data.compl <= 5) {
                setDa(data.compl)
            } else {
                if (data.compl > 5 && data.compl < 10) {
                    setDa(data.compl)
                } else {
                    if (data.compl > 10 && data.compl < 50) {
                        setDa(data.compl)
                    } else {
                        setDa(50)
                    }
                }
            }
        }
        valu2()
        const valu3 = () => {
            if (data.compl >= 0 && data.compl <= 5) {
                setD(data.compl)
            } else {
                if (data.compl > 5 && data.compl < 10) {
                    setD(data.compl)
                } else {
                    if (data.compl > 10 && data.compl < 50) {
                        setD(data.compl)
                    } else {
                        if (data.compl > 50 && data.compl < 100) {
                            setD(data.compl)
                        } else {
                            setD(100)
                        }
                    }
                }
            }
        }
        valu3()

    }
    useEffect(() => {
        valiars()
    })


    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card" id={fondo} >
                    <img src={image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-titles">Recompensa por cumplir 5 actividades</h5>
                        <p className="card-text">{dats}/5</p>
                        {
                            buttons === true ? (
                                <Button><Link to="/Premio">Descargar</Link></Button>
                            ) : ''
                        }

                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-titles">Recompensa por cumplir 10 actividades</h5>
                        <p className="card-text">{dat}/10</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-titles">Recompensa por cumplir 10 actividades</h5>
                        <p className="card-text">{da}/50</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2200/2200738.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-titles">Recompensa por cumplir 10 actividades</h5>
                        <p className="card-text">{d}/100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
