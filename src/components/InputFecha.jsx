import { useState } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from "prop-types";
import { isValid, parse } from 'date-fns';

function InputFecha({id,etiqueta}) {

    const [fecha, setFecha] = useState('');
    const [fechaValida, setFechaValida] = useState(true);

    const handleDateChange = (event) => {
        const inputValue = event.target.value;
        setFecha(inputValue);
    
        // Validar la fecha utilizando date-fns
        const parsedDate = parse(inputValue, 'dd/MM/yyyy', new Date());
        const isValidDate = isValid(parsedDate);
    
        setFechaValida(isValidDate);
      };


    return (
        <>
            <label className="form-label" htmlFor={id}>{etiqueta}</label>
            <div className="input-group">
                <InputMask
                    id={id}
                    type="text"
                    className="form-control"
                    mask="99/99/9999" 
                    value={fecha}
                    onChange={handleDateChange}
                    />
                <button                    
                    className="btn btn-primary "
                    style={{ width: '10%' }}
                    type="button"
                >
                    <i className=" bx bx-calendar"></i></button>
            </div>
            {!fechaValida && <p style={{ color: 'red' }}>Fecha no válida</p>}
        </>
    )
}

InputFecha.propTypes={
    id:PropTypes.string.isRequired,
    etiqueta:PropTypes.any

}

export default InputFecha