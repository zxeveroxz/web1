import { useState, useEffect } from "react"

function InputSelect({ id, etiqueta }) {

    const [opciones, setOpciones] = useState([])

    useEffect(() => {
        // Importa el archivo JSON
        import('../../datos/distritos.json').then((data) => {
            //console.log(data.default);
            const  datosOrdenados = data.default.results.sort((a,b)=>
                a.nombdist.localeCompare(b.nombdist)
            )
            setOpciones(datosOrdenados);
        });
    }, []);

    return (
        <>
            <label className="form-label" htmlFor={id}>{etiqueta}</label>
            <div className="input-group">
                <select
                    className="form-select"
                >
                    <option value="" disabled>
                        Selecciona una opción
                    </option>
                    {opciones.map((opcion) => (
                        <option
                            key={opcion.ccdi}
                            value={opcion.ccdi}
                        >
                            {opcion.nombdist}
                        </option>
                    ))}

                </select>


            </div>
        </>
    )
}

export default InputSelect