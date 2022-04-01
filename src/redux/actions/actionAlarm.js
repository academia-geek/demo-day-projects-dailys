import { typesAlarm } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc } from "@firebase/firestore";


// -----------------------------------------------> listar el contenido de la base de datos
export const ListAlarmSync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "AlarmDate"));
        const alarm = [];
        querySnapshot.forEach((doc) => {
            alarm.push({
                ...doc.data()
            })
        });
        dispatch(listAlarmSyn(alarm));
    }
}

export const listAlarmSyn = (alarm) => {
    return {
        type: typesAlarm.list,
        payload: alarm
    }
}

// -----------------------------------------------> agregar el contenido de la base de datos
export const AddAlarmSync = (newAlarm) => {
    return (dispatch) => {
        addDoc(collection(db, "AlarmDate"), newAlarm)
            .then(resp=> {
                dispatch(addSyn(newAlarm))
                dispatch(ListAlarmSync())
            })
            .catch(error=> {
                console.log(error)
                dispatch(ListAlarmSync())
            })

    }
}

export const addSyn = (alarm) => {
    return {
        type: typesAlarm.add,
        payload: alarm
    }
}

