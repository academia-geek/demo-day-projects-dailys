import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../../styles/estadistica/est.css"
import { listEstadist } from '../../redux/actions/actionTask';

export const TabTask = () => {
    const dispatch = useDispatch();

    const [estado, setEstado] = useState()
    const [compl, setCompl] = useState(0)
    const [nocompl, setNocompl] = useState(0)
    const [total, setTotal] = useState(0)
    const tareasusers = {}

    const { task } = useSelector(store => store.tarea)

    useEffect(() => {
        dispatch(listEstadist())
        conteo()
    }, [task])

    console.log(task)
    let completado = 0
    let nocompletado = 0

    const users = JSON.parse(localStorage.getItem('users'));
    const codigo = users.codigo


    const conteo = () => {
        let datas = task.filter(user => user.idUser === users.codigo);
        console.log(datas)
        task.forEach(element => {

            const { evalue, idUser, actividad } = element
            if (evalue === "Completado" && codigo === idUser) {
                completado++
            } else if (evalue === "No completado" && codigo === idUser) {
                nocompletado++
            }

            setEstado(evalue)
        })
        setCompl(completado)
        setNocompl(nocompletado)
        setTotal(completado + nocompletado)
    }
  return (
    <div>TabTask</div>
  )
}
