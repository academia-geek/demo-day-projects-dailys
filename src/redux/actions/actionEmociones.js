import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesEmociones } from "../types/types";

export const listEmocionesFrasesAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "emociones"));
        const frases = [];
        querySnapshot.forEach((doc) => {
            frases.push({
                ...doc.data()
            })
        });
        dispatch(listEmocionesFrasesSync(frases));
    }
}

export const listEmocionesFrasesSync = (frases) => {
    return {
        type: typesEmociones.list,
        payload: frases
    }
}

export const AddEmocionesASync = (select) => {
    return (dispatch) => {
        addDoc(collection(db, "InfoEmociones"), select)
            .then(resp=> {
                dispatch(addEmocionesSyn(select))
               
            })
            .catch(error=> {
                console.log(error)
               
            })

    }
}

export const addEmocionesSyn = (seleccionado) => {
    return {
        type: typesEmociones.add,
        payload: seleccionado
    }
}
