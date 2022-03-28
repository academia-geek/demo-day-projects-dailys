import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../../redux/actions/actionRegister';
import * as Yup from "yup";
import { SubDiv2, ButtonInicio } from '../../styles/registro/styledRegistro';
import { Link } from 'react-router-dom';
const Registro = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         name: "",
         email: "",
         password1: "",
         password2: "",
      },
      validationSchema: Yup.object({
         name: Yup.string().required(),
         email: Yup.string().email().required(),
         password1: Yup.string().required(),
         password2: Yup.string().required(),
      }),
      onSubmit: (data) => {
         const { name, email, password1 } = data;
         dispatch(registroEmailPasswordNombre(email, password1, name));
      },
   });
   return (
      <div className='registro'>
         <h2 className='logo'>Dailys</h2>
         <SubDiv2>
            <h3>Crea tu cuenta</h3>

            <form onSubmit={formik.handleSubmit}>

               <label for="name">Nombre completo</label>
               <input onChange={formik.handleChange} className="correo" name='name' />


               <label for="email">Dirección de correo electrónico</label>
               <input onChange={formik.handleChange} className="correo" name='email' />


               <label for="password1">Contraseña</label>
               <input onChange={formik.handleChange} type="password" className="password" name='password1' placeholder='Como mínimo 6 carácteres' />

               <label for="password2">Vuelva a escribir contraseña</label>
               <input onChange={formik.handleChange} type="password" className="password2" name='password2' />


               <ButtonInicio type="submit" >Continuar</ButtonInicio>

               <span className='terminos'>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad.</span>
            </form>
            <div className='ya'>
               <hr />
               <span >¿Ya tienes cuenta en Dailys?</span> <br/>
               <span className='creaCuenta'><Link to="/login" className='creaCuenta'>Inicia sesión</Link></span>
            </div>

         </SubDiv2>
      </div>
   )
}

export default Registro