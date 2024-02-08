
 import { useState,useEffect } from "react"
 import PropTypes from "prop-types";

function InputTexto({id,etiqueta, valor}) {

    const [dato,setDato]= useState(valor || '')

    useEffect(()=>{
        setDato(valor || '');
    },[valor]);

  return (
    <>
    <label className="form-label" htmlFor={id}>{etiqueta}</label>
            <div  className="input-group"> 
                <input 
                    id={id} 
                    type="text" 
                    className="form-control"  
                    value={dato}
                    onChange={({target})=>setDato(target.value)}
                  />                
            </div>
    </>
  )
}



// Especifica los PropTypes para tus propiedades
InputTexto.propTypes = {
  id: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  valor: PropTypes.any, // Puedes ajustar este PropTypes según el tipo de datos que esperas
};

export default InputTexto