import React from 'react'

const NuestrosServicios = () => {
    return (
        <div id="servicios">
            <div className="container">
                <h3 className="text-center">
                    Nuestros Servicios
                </h3>
                <div className="row mb-5">
                  <div className="col-sm-12 col-md-4 text-center mt-3">
                      <i className="fas fa-shopping-bag fa-2x"></i><h4 className="">Venta</h4>
                      <p className="mt-3">
                        texto a mostrar
                      </p>
                      <button className="btn btn-info text-center btn-sm">
                          Ver mas <i className="fas fa-arrow-circle-right"></i></button>
                  </div>
                  <div className="col-sm-12 col-md-4 text-center mt-3">
                    <i className="fas fa-hammer fa-2x"></i><h4 className="">Reparaciones</h4>
                    <p className="mt-3">
                        texto a mostrar
                    </p>
                    <button className="btn btn-info text-center btn-sm">
                        Ver mas <i className="fas fa-arrow-circle-right"></i></button>
                </div>
                <div className="col-sm-12 col-md-4 text-center mt-3">
                    <i className="fas fa-headset fa-2x"></i><h4 className="">Asesoramientos</h4>
                    <p className="mt-3">
                        texto a mostrar
                    </p>
                    <button className="btn btn-info text-center btn-sm">
                        Ver mas <i className="fas fa-arrow-circle-right"></i></button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default NuestrosServicios
