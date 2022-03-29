import { typesLogin} from '../types/types';
import {  getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { facebook, google } from '../../firebase/firebaseConfig';


export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
            localStorage.setItem("users", JSON.stringify({
                name: user.displayName,
                email: user.email,
                codigo: user.uid,
                imagen: user.photoURL
            }));
        })
        .catch(e =>{
            console.log(e);
        })
    }
}
export const loginFacebook = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}


export const loginSincrono = (id, displayname) => {

    return{
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
