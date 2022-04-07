import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "../../styles/estadistica/est.css"
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Rendimiento = () => {

    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const [compl, setCompl] = useState(0)
    const [compl1, setCompl1] = useState(0)
    const [compl2, setCompl2] = useState(0)
    const [compl3, setCompl3] = useState(0)
    const [compl4, setCompl4] = useState(0)
    const [compl5, setCompl5] = useState(0)
    const [compl6, setCompl6] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const [nocompl1, setNocompl1] = useState(0)
    const [nocompl2, setNocompl2] = useState(0)
    const [nocompl3, setNocompl3] = useState(0)
    const [nocompl4, setNocompl4] = useState(0)
    const [nocompl5, setNocompl5] = useState(0)
    const [nocompl6, setNocompl6] = useState(0)

    const { task } = useSelector(store => store.tarea)
    const users = JSON.parse(localStorage.getItem('users'));

    const datSema = task.filter(user => {
        if (user.idUser === users.codigo) {
            if (user.dia <= day && user.mes <= month) {
                return user
            }
        }
    })
    let completado = 0
    let nocompletado = 0

    const conteo = () => {
        datos.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                completado++
            } else if (evalue === "No completado") {
                nocompletado++
            }
        })
        setCompl(completado)
        setNocompl(nocompletado)
    }

    const datos = datSema.filter(dato => {
        if (dato.dia === day) {
            return dato
        }
    })

    const datos1 = datSema.filter(dato => {
        if (dato.dia === day - 1) {
            return dato
        }
    })
    let completad = 0
    let nocompletad = 0

    const conteo2 = () => {
        datos1.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                completad++
            } else if (evalue === "No completado") {
                nocompletad++
            }
        })
        setCompl1(completad)
        setNocompl1(nocompletad)
    }
    const datos2 = datSema.filter(dato => {
        if (dato.dia === day - 2) {
            return dato
        }
    })
    let completa = 0
    let nocompleta = 0

    const conteo1 = () => {
        datos2.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                completa++
            } else if (evalue === "No completado") {
                nocompleta++
            }
        })
        setCompl2(completa)
        setNocompl2(nocompleta)
    }
    const datos3 = datSema.filter(dato => {
        if (dato.dia === day - 3) {
            return dato
        }
    })
    
    let complet = 0
    let nocomplet = 0

    const conteo3 = () => {
        datos3.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                complet++
            } else if (evalue === "No completado") {
                nocomplet++
            }
        })
        setCompl3(complet)
        setNocompl3(nocomplet)
    }
    const datos4 = datSema.filter(dato => {
        if (dato.dia === day - 4) {
            return dato
        }
    })

    let comple = 0
    let nocomple = 0

    const conteo4 = () => {
        datos4.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                comple++
            } else if (evalue === "No completado") {
                nocomple++
            }
        })
        setCompl4(comple)
        setNocompl4(nocomple)
    }
    const datos5 = datSema.filter(dato => {
        if (dato.dia === day - 5) {
            return dato
        }
    })
    let comp = 0
    let nocomp = 0

    const conteo5 = () => {
        datos5.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                comp++
            } else if (evalue === "No completado") {
                nocomp++
            }
        })
        setCompl5(comp)
        setNocompl5(nocomp)
    }
    const datos6 = datSema.filter(dato => {
        if (dato.dia === day - 6) {
            return dato
        }
    })
    let com = 0
    let nocom = 0

    const conteo6 = () => {
        datos6.forEach(element => {
            const { evalue } = element
            if (evalue === "Completado") {
                com++
            } else if (evalue === "No completado") {
                nocom++
            }
        })
        setCompl6(com)
        setNocompl6(nocom)
    }

    // -----------------------------grafica de barras
    const datas = {
        labels: ["Viernes", "Sabado", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves"],
        datasets: [{
            label: "completados",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            data: [compl6, compl5, compl4, compl3, compl2, compl1, compl]
        }, {

            label: "no completados",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: [nocompl6, nocompl5, nocompl4, nocompl3, nocompl2, nocompl1, nocompl]
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false
    }
    useEffect(() => {
        conteo()
        conteo1()
        conteo2()
        conteo3()
        conteo4()
        conteo5()
        conteo6()
    }, [task])

    return (
        <div>
            <h2 className='mt-5'>Rendimiento de los ultimos 7 dias</h2>
            <div >
                <Bar options={options} data={datas} />
            </div>
        </div>
    )
}
