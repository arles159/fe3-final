import React from "react";
import { useState } from "react";


const ContactForm = () => {
  const [nombreCompleto, cambiarNombreCompleto] = useState({campo: '', valido: null});
  const [email, cambiarEmail] = useState({campo: '', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const onChange = (e) =>{
    cambiarNombreCompleto({...nombreCompleto, campo: e.target.value})
  }
  const onChange2 = (e) =>{
    cambiarEmail({...email, campo: e.target.value})
  }
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }
  const validacion = () =>{
    if(expresiones.nombre.test(nombreCompleto.campo)){
      cambiarNombreCompleto({...nombreCompleto, valido: 'true'})
    } else {
      cambiarNombreCompleto({...nombreCompleto, valido: 'false'})

    }
  }
  const validacion2 = () =>{
    if(expresiones.correo.test(email.campo)){
      cambiarEmail({...email, valido: 'true'})
    } else {
      cambiarEmail({...email, valido: 'false'})
    }
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email.valido === 'true' && nombreCompleto.valido === 'true'){
      cambiarFormularioValido(true)
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "<h2>Perfecto " + nombreCompleto.campo + ", te avisaremos en cuanto antes via e-mail.</h2>";
    } else {
      cambiarFormularioValido(false)
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "<h2>ERROR!, verifica los datos ingresados e intenta nuevamente.</h2>";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
          <label htmlFor="nombreApellido"></label>
          <h1>¿Necesitas aun más informacion 🦷?</h1>
          <h5>Diligencia el siguiente formulario, nosotros te contactamos.</h5>
          <input 
            type="text" 
            id="nombreApellido" 
            placeholder="Nombres y apellidos" 
            value={nombreCompleto.campo} 
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
          />
          <label htmlFor="email"></label>
          <input 
            type="email" 
            id="email" 
            placeholder="E-mail" 
            value={email.campo} 
            onChange={onChange2}
            onKeyUp={validacion2}
            onBlur={validacion2}
          />
          <button type="submit" >Enviar</button>
      </form>
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default ContactForm;