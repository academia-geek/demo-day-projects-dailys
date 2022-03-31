import { typesPerfil } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDocs, query, where, updateDoc } from "@firebase/firestore";

// -----------------------------------------------> listar el contenido de la base de datos
export const ListperfilSync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "Usuarios"));
        const perfil = [];
        querySnapshot.forEach((doc) => {
            perfil.push({
                ...doc.data()
            })
        });
        dispatch(listperfilSyn(perfil));
    }
}

export const listperfilSyn = (perfil) => {
    return {
        type: typesPerfil.list,
        payload: perfil
    }
}

//------------------------------------------------------
export const editPerfilAsyn = (codigo, perfil) => {
    return async (dispatch) => {
        const traerCollection = collection(db, "Usuarios")
        const q = query(traerCollection, where("codigo", "==", codigo))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach(async (docu) => {
            id = docu.id
        })
        const docRef = doc(db, "Usuarios", id)
        await updateDoc(docRef, perfil)
            .then(() => listperfilSyn())
        dispatch(ListperfilSync())
    }
}

export const editPerfilSyn = (codigo, perfil) => {
    return {
        type: typesPerfil.edit,
        payload: perfil
    }
}