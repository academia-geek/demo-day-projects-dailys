import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/actionLogin';
import * as Yup from "yup";
import {DivInicio, SubDiv, ButtonInicio } from '../styles/login/styledLogin'
import "../styles/stylesLogin.css"
const Login = () => {

    
    const dispatch = useDispatch();
    
    const formik = useFormik({
     initialValues: {
        email: "",
        password: "",
     },
     validationSchema: Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
     }),
     onSubmit: (data) => {
        const { email, password } = data;
        dispatch(loginEmailPassword(email, password));
        console.log("hola" + {email})
     },
  });
 
  const handleGoogle = () => {
     dispatch(loginGoogle());
  };
 
  const handleFacebook = () => {
     dispatch(loginFacebook());
  };
 
  return (
    <DivInicio>
   <h2 className='logo'>Dailys</h2>
<SubDiv>
<h3>Iniciar sesión</h3>

<form onSubmit={formik.handleSubmit}>
<label for="correo">Dirección de correo electrónico</label>
<input onChange={formik.handleChange} className="correo" name='email'/>


<label for="password">Contraseña</label>
<input onChange={formik.handleChange} type="password" className="password" name='password'/>


<ButtonInicio type='submit'>Iniciar sesión</ButtonInicio>

<span className='terminos'>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad.</span>
</form>

<hr/>
<div className='iconos'>
<div className='ya'>
<span >Inicia sesión con Google o Facebook</span>
</div>
<button onClick={handleFacebook} id='boton' ><img width={20} height={20} src='https://res.cloudinary.com/paolavbm/image/upload/v1647828889/facebook_3_i1wnhz.png' alt=''/>Inicia sesión con Facebook</button> <br/>
<button onClick={handleGoogle} id='boton'><img width={20} height={20}  src='https://res.cloudinary.com/paolavbm/image/upload/v1647828890/google_1_ftezas.png' alt=''/>Inicia sesión com Google</button>
<p>¿Eres nuevo en Dailys?</p> 
<span className='creaCuenta'>Crea tu cuenta</span>
</div>

</SubDiv>



</DivInicio>
  )
}

export default Login