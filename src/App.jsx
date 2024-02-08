import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Aside from './components/Aside.jsx'
import InputFecha from './components/InputFecha.jsx'
import InputDomento from './components/InputDomento.jsx'
import InputTexto from './components/InputTexto.jsx'
import InputSelect from './components/InputSelect.jsx'


function App() {

  const [datosApi, setDatosApi] = useState('');

  const handleBuscar=(datos)=>{
    setDatosApi(datos);
  }


  return (
    <>
    <div className="layout-container">
      <Aside/>
     
      <div className="layout-page">
        <Nav />


        <div className="content-wrapper">

          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-2 mb-2"><span className="text-muted fw-light">Registro/</span> Nuevo</h4>

            <div className="row">
              <div className="col-xl">
                <div className="card mb-4">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Datos Personales</h5>
                    <small className="text-muted float-end">Default label</small>
                  </div>
                  <div className="card-body">

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <InputDomento onBuscar={handleBuscar} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <InputTexto id="txt_datos" etiqueta="Apellidos y Nombres"  valor={datosApi} />
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <InputTexto id="txt_direccion" etiqueta="Dirección:" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <InputTexto id="txt_localidad" etiqueta="Localidad:" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <InputSelect  id="txt_distrito" etiqueta="Distrito"/>                      
                    </div>

                    
                    <div className="col-md-6 mb-3">
                    <InputFecha id="txt_fecha2" etiqueta="Fecha" />

                    </div>


                  </div>
                </div>
              </div>
            </div>


          </div>



          <Footer />


          <div className="content-backdrop fade"></div>

        </div>
      </div>

    </div>

    <div className="layout-overlay layout-menu-toggle"></div>
  </>
  )
}

export default App
