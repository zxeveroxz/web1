import InputMask from 'react-input-mask';
import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";

function InputDomento({ onBuscar }) {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);
    const [mascara, setMascara] = useState('');
    const [mostrarBoton, setMostrarBoton] = useState(false);
    const [cantidadDigitosValida, setCantidadDigitosValida] = useState(false);
    const inputNro = useRef();
    const inputTipo = useRef();

    const buscarDNI = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/10');
            const data = await response.json();
            return data.title;
        } catch (error) {
            console.error('Error al buscar DNI:', error);
            return '';
        }
    }

    const buscarRUC = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/6');
            const data = await response.json();
            return data.title;
        } catch (error) {
            console.error('Error al buscar RUC:', error);
            return '';
        }
    }

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setOpcionSeleccionada(value);

        switch (value) {
            case '1':
                setMascara('99999999');
                break;
            case '6':
                setMascara('99999999999');
                break;
            default:
                setMascara('');
                break;
        }

        setMostrarBoton(value === '1' || value === '6');
    };

    const handleInputChange = () => {
        const inputNroValue = inputNro.current.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        let cantidadDigitosEsperada;

        switch (opcionSeleccionada) {
            case '1':
                cantidadDigitosEsperada = 8;
                break;
            case '6':
                cantidadDigitosEsperada = 11;
                break;
            default:
                cantidadDigitosEsperada = 0; // Otra opción, no hay restricción de cantidad de dígitos
                break;
        }

        setCantidadDigitosValida(inputNroValue.length === cantidadDigitosEsperada);
    }

    const buscarlo = async () => {
        if (!cantidadDigitosValida) {
            // Mostrar mensaje de cantidad de dígitos no válida
            return;
        }

        let respuesta = '';

        if (opcionSeleccionada === '1') {
            respuesta = await buscarDNI();
        } else if (opcionSeleccionada === '6') {
            respuesta = await buscarRUC();
        }

        onBuscar(respuesta);
    }

    useEffect(() => {
        console.log("Opción seleccionada:", opcionSeleccionada);
    }, [opcionSeleccionada]);

    return (
        <>
            <label className="form-label" htmlFor="basic-default-fullname">
                Documento de Identidad
            </label>
            <div className="input-group">
                <select
                    className="form-select"
                    style={{ width: '25%' }}
                    value={opcionSeleccionada}
                    onChange={handleSelectChange}
                    onClick={handleInputChange}
                    ref={inputTipo}
                >
                    <option value="1">DNI</option>
                    <option value="6">RUC</option>
                    <option value="0">OTROS</option>
                </select>

                <InputMask
                    mask={mascara}
                    type="text"
                    className="form-control"
                    style={{ width: '60%' }}
                    placeholder=""
                    ref={inputNro}
                    onChange={handleInputChange}
                    
                />
                {mostrarBoton && cantidadDigitosValida && 
                    <button className="btn btn-primary" type="button" onClick={buscarlo}>
                        <i className="bx bx-search"></i>
                    </button>
                }
            </div>
        </>
    );
}

// Especifica los PropTypes para tus propiedades
InputDomento.propTypes = {
    onBuscar: PropTypes.func.isRequired,
};

export default InputDomento;