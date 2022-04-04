import { typesTask } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc } from "@firebase/firestore";

// -----------------------------------------------> editar el contenido de la base de datos

export const editAsyn = (codigo, actividad) => {
    return async (dispatch) => {
        const traerCollection = collection(db, "DataUsuarios")
        const q = query(traerCollection, where("codigo", "==", codigo))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach(async (docu) => {
            id = docu.id
        })

        const docRef = doc(db, "DataUsuarios", id)
        await updateDoc(docRef, actividad)
            .then(() => list())
        dispatch(listTasks())
    }
}

export const editSyn = (codigo, actividad) => {
    return {
        type: typesTask.edit,
        payload: actividad
    }
}

// ----------------------------------------------->eliminar el contenido de la base de datos
export const deleteTask = (actividad) => {
    return async (dispatch) => {

        const estCollection = collection(db, "DataUsuarios");
        const q = query(estCollection, where("actividad", "==", actividad))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "DataUsuarios", docu.id));
        })
        dispatch(deleteSincrono(actividad));
        dispatch(listTasks())
    }
}

export const deleteSincrono = (actividad) => {
    return {
        type: typesTask.delete,
        payload: actividad
    }
}

// -----------------------------------------------> listar el contenido de la base de datos

export const listTasks = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "DataUsuarios"));
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
        addDoc(collection(db, "DataUsuarios"), newTarea)
            .then(resp => {
                dispatch(addSyn(newTarea))
                dispatch(listTasks())
            })
            .catch(error => {
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
