import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const Rangoe = () => {
    const fecha = new Date();
    const month = fecha.getUTCMonth() + 1;
    const day = fecha.getUTCDate() - 1;
    const [happy, setHappy] = useState(0)
    const [veryHappy, setVeryhappy] = useState(0)
    const [mehj, setMehj] = useState(0)
    const [sad, setSad] = useState(0)
    const [hedied, sethedied] = useState(0)

    const { task } = useSelector(store => store.tarea);

    let feliz = 0, feliz1 = 0, feliz2 = 0, feliz3 = 0, feliz4 = 0, feliz5 = 0, feliz6 = 0
    let muyfeliz = 0, muyfeliz1 = 0, muyfeliz2 = 0, muyfeliz3 = 0, muyfeliz4 = 0, muyfeliz5 = 0, muyfeliz6 = 0
    let meh = 0, meh1 = 0, meh2 = 0, meh3 = 0, meh4 = 0, meh5 = 0, meh6 = 0
    let triste = 0, triste1 = 0, triste2 = 0, triste3 = 0, triste4 = 0, triste5 = 0, triste6 = 0
    let semurio = 0, semurio1 = 0, semurio2 = 0, semurio3 = 0, semurio4 = 0, semurio5 = 0, semurio6 = 0

    const users = JSON.parse(localStorage.getItem('users'));
    
    const datSema = task.filter(user => {
        if (user.codigo === users.codigo) {
            if (user.dia <= day && user.mes <= month) {
                return user
            }
        }
    })

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
    const datos2 = datSema.filter(dato => {
        if (dato.dia === day - 2) {
            return dato
        }
    })
    const datos3 = datSema.filter(dato => {
        if (dato.dia === day - 3) {
            return dato
        }
    })
    const datos4 = datSema.filter(dato => {
        if (dato.dia === day - 4) {
            return dato
        }
    })
    const datos5 = datSema.filter(dato => {
        if (dato.dia === day - 5) {
            return dato
        }
    })
    const datos6 = datSema.filter(dato => {
        if (dato.dia === day - 6) {
            return dato
        }
    })

    const conteo = () => {
        datos.forEach(element => {
            const { asnwer } = element
            if (asnwer === 1) {
                feliz++
            } else if (asnwer === 2) {
                muyfeliz++
            } else if (asnwer === 3) {
                meh++
            } else if (asnwer === 4) {
                triste++
            } else if (asnwer === 5) {
                semurio++
            }
        })
        datos1.forEach(element => {
             const { asnwer } = element
            if (asnwer === 1) {
                feliz1++
            } else if (asnwer === 2) {
                muyfeliz1++
            } else if (asnwer === 3) {
                meh1++
            } else if (asnwer === 4) {
                triste1++
            } else if (asnwer === 5) {
                semurio1++
            }
        })
        datos2.forEach(element => {
            const { asnwer } = element
            if (asnwer === 1) {
                feliz2++
            } else if (asnwer === 2) {
                muyfeliz2++
            } else if (asnwer === 3) {
                meh2++
            } else if (asnwer === 4) {
                triste2++
            } else if (asnwer === 5) {
                semurio2++
            }
        })
        datos3.forEach(element => {
            const { asnwer } = element
            if (asnwer === 1) {
                feliz3++
            } else if (asnwer === 2) {
                muyfeliz3++
            } else if (asnwer === 3) {
                meh3++
            } else if (asnwer === 4) {
                triste3++
            } else if (asnwer === 5) {
                semurio3++
            }
        })
        datos4.forEach(element => {
            const { asnwer } = element
            if (asnwer === 1) {
                feliz4++
            } else if (asnwer === 2) {
                muyfeliz4++
            } else if (asnwer === 3) {
                meh4++
            } else if (asnwer === 4) {
                triste4++
            } else if (asnwer === 5) {
                semurio4++
            }
        })
        datos5.forEach(element => {
             const { asnwer } = element
            if (asnwer === 1) {
                feliz5++
            } else if (asnwer === 2) {
                muyfeliz5++
            } else if (asnwer === 3) {
                meh5++
            } else if (asnwer === 4) {
                triste5++
            } else if (asnwer === 5) {
                semurio5++
            }
        })
        datos6.forEach(element => {
            const { asnwer } = element
            if (asnwer === 1) {
                feliz6++
            } else if (asnwer === 2) {
                muyfeliz6++
            } else if (asnwer === 3) {
                meh6++
            } else if (asnwer === 4) {
                triste6++
            } else if (asnwer === 5) {
                semurio6++
            }
        })
        setHappy(feliz + feliz1 + feliz2 + feliz3 + feliz4 + feliz5 + feliz6)
        setVeryhappy(muyfeliz + muyfeliz1 + muyfeliz2 + muyfeliz3 + muyfeliz4 + muyfeliz5 + muyfeliz6)
        setMehj(meh + meh1 + meh2 + meh3 + meh4 + meh5 + meh6)
        setSad(triste + triste1 + triste2 + triste3 + triste4 + triste5 + triste6)
        sethedied(semurio + semurio1 + semurio2 + semurio3 + semurio4 + semurio5 + semurio6)
    }
    useEffect(() => {
        conteo()
        
    }, [task])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Emociones mas frecuentes en estos ultimos 7 dias',
            },
        },
    };

    const datas = {
        labels: ["Feliz", "Muy Feliz", "Normal", "Triste", "Deprimido/a"],
        datasets: [{
            label: "Frecuencia",
            backgroundColor: '#b99fdf',
            borderColor: '#b99fdf',
            borderWidth: 1,
            data: [happy, veryHappy, mehj, sad, hedied]
        }]
    }

  return (
    <div className='no-tocar'>
          <div className="mx-auto">
              <Bar options={options} data={datas} />
              </div>
    </div>
  )
}
