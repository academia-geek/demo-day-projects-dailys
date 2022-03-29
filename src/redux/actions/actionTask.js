import { typesTask } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc } from "@firebase/firestore";

// -----------------------------------------------> editar el contenido de la base de datos

export const editAsyn = (code, tarea) => {
    return async (dispatch) => {
        const traerCollection = collection(db, "tareas")
        const q = query(traerCollection, where("code", "==", code))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach(async (docu) => {
            id = docu.id
        })
        console.log(id)

        const docRef = doc(db, "tareas", id)
        await updateDoc(docRef, tarea)
            .then(() => list())
        dispatch(listTasks())
    }
}

export const editSyn = (code, tarea) => {
    return {
        type: typesTask.edit,
        payload: tarea
    }
}

// ----------------------------------------------->eliminar el contenido de la base de datos
export const deleteTask = (nombre) => {
    return async (dispatch) => {

        const estCollection = collection(db, "tareas");
        const q = query(estCollection, where("nombre", "==", nombre))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "tareas", docu.id));
        })
        dispatch(deleteSincrono(nombre));
        dispatch(listTasks())
    }
}

export const deleteSincrono = (nombre) => {
    return {
        type: typesTask.delete,
        payload: nombre
    }
}

// -----------------------------------------------> listar el contenido de la base de datos

export const listTasks = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "tareas"));
        const tarea = [];
        querySnapshot.forEach((doc) => {
            tarea.push({
                ...doc.data()
            })
        });
        dispatch(list(tarea));
    }
}

export const list = (tareas) => {
    return {
        type: typesTask.list,
        payload: tareas
    }
}

// -----------------------------------------------> agregar el contenido de la base de datos
export const registertarea = (newTarea) => {
    return (dispatch) => {
        addDoc(collection(db, "tareas"), newTarea)
            .then(resp=> {
                dispatch(addSyn(newTarea))
                dispatch(listTasks())
            })
            .catch(error=> {
                console.log(error)
                dispatch(listTasks())
            })

    }
}

//------Sincronica----------------///
export const addSyn = (tareas) => {
    return {
        type: typesTask.add,
        payload: tareas
    }
}

// -----------------------------------------------> estadisticas
export const registerEstadistica = (estadistica, id) => {
    return (dispatch) => {
        const newEstadist = {
            estadistica, id
        }
        addDoc(collection(db, "estadisticas"), newEstadist)
            .then(resp => {
                dispatch(addSynest(newEstadist))
            })
            .catch(error => {
                console.log(error)
            })

    }
}

//------Sincronica----------------///
export const addSynest = (newEstadist) => {
    return {
        type: typesTask.add,
        payload: newEstadist
    }
}
export const listEstadist = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "estadisticas"));
        console.log(querySnapshot)
        const tarea = [];
        querySnapshot.forEach((doc) => {
            tarea.push({
                ...doc.data()
            })
        });
        dispatch(listar(tarea));
    }
}

export const listar = (estadisticas) => {
    return {
        type: typesTask.list,
        payload: estadisticas
    }
}