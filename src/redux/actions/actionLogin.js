import { typesLogin } from '../types/types';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { facebook, google } from '../../firebase/firebaseConfig';
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const loginEmailPassword = (email, password) => {

    return (dispatch) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    loginSincrono(user.uid, user.displayName)
                )
                console.log('Bienvenid@');
            })
            .catch(e => {
                console.log('El usuario no existe');
            })
    }
}

export const listsd = (usuario) => {
    return {
        type: typesLogin.list,
        payload: usuario
    }
}
export const registertarea = (newUsuario) => {
    return (dispatch) => {
        addDoc(collection(db, "Usuarios"), newUsuario)
            .then(resp => {
                resp(addSyn(newUsuario))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export const addSyn = (usuario) => {
    return {
        type: typesLogin.add,
        payload: usuario
    }
}
export const loginGoogle = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "Usuarios"));
        const usuario = [];
        querySnapshot.forEach((doc) => {
            usuario.push({
                ...doc.data()
            })
        });

        let data = (listsd(usuario));

        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
                console.log(`Bienvenid@ ${user.displayName}`);
                localStorage.setItem("users", JSON.stringify({
                    codigo: user.uid
                }));
                const uses = JSON.parse(localStorage.getItem("users"))
                const filts = data.payload.filter(user => user.codigo === uses.codigo)
                console.log(filts)
                const dats = {
                    name: user.displayName,
                    email: user.email,
                    codigo: user.uid,
                    imagen: "https://thumbs.dreamstime.com/b/el-icono-del-perfil-con-a%C3%B1ade-la-muestra-perfile-y-nuevo-m%C3%A1s-positivo-s%C3%ADmbolo-111945352.jpg",
                    descripcion: ""
                }
                if (filts.length === 0) {
                    dispatch(registertarea(dats))
                }
            })
            .catch(e => {
                console.log(e);
            })

    }
}
export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
                console.log(`Bienvenid@ ${user.displayName}`);
                localStorage.setItem("users", JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    codigo: user.uid,
                    imagen: user.photoURL
                }));
            })
            .catch(e => {
                console.log(e);
            })
    }
}


export const loginSincrono = (id, displayname) => {

    return {
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}


export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then((user) => {
                dispatch(logoutSincronico());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const logoutSincronico = () => {
    return {
        type: typesLogin.logout,
    };
};
