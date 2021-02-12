import React from 'react'
import newlogo from '../img/newlogo.png'

const Encabezado = () => {
    return (
        <>
            {/* Icono Envio de Mail */}
            <div id="header" className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-4">
                        <h6 className="lead text-center d-none d-md-block">Escribinos</h6>
                        <div className="d-none d-md-flex justify-content-center">
                            <div>
                                <a href="#envioMail">
                                    <i className="fas fa-at fa-2x social" data-toggle="modal" data-target="#envioMail"></i>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Logo principal */}
                    <a href="index.html" className="mx-auto">
                        <img src={newlogo} className="" width="175" alt=""></img>
                    </a>


                    {/* Iconos Nuestras Redes */}
                    <div className="col-sm-12 col-md-4">
                        <h6 className="lead text-center d-none d-md-block">Nuestras Redes</h6>
                        <div className="d-none d-md-flex justify-content-center">
                            <div>
                                <a href="https://www.facebook.com/wetecno-108771234274257/" className="mx-2" rel="noreferrer" target="_blank">
                                    <i className="fab fa-facebook fa-lg social"></i>
                                </a>
                            </div>

                            <div>
                                <a href="http://www.instagram.com/we.tecno" className="mx-2" rel="noreferrer" target="_blank">
                                    <i className="fab fa-instagram fa-lg social"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal envio de mail */}
            <div className="modal fade" id="envioMail" tabIndex="-1" role="dialog" aria-labelledby="envioMailLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="envioMailLabel">Escribinos</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form id="mailform">
                                <div className="form-row">
                                    <div className="form-group col-sm-12 col-md-6">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="form-nombre" placeholder="Ingrese su nombre" required></input>
                                    </div>

                                    <div className="form-group col-sm-12 col-md-6">
                                        <label htmlFor="apellido">Apellido</label>
                                        <input type="text" className="form-control" name="apellido" id="form-apell" placeholder="Ingrese su apellido" required></input>
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="form-group col-sm-12 col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name="email" id="form-email" placeholder="Ingrese su email" required></input>
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6">
                                        <label htmlFor="telefono">Telefono de contacto</label>
                                        <input type="number" name="telefono" className="form-control" id="form-telf" placeholder="(Opcional)"></input>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label htmlFor="mensaje">Mensaje</label>
                                        <textarea name="mensaje" className="form-control" id="form-msg" cols="100%" rows="5" placeholder="Escribir..." required></textarea>
                                    </div>
                                </div>

                                <button id="envioform" type="submit" className="btn btn-primary btn-sm float-right">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row d-flex d-md-none justify-content-end">
                    <div id="post-header" className="">
                        <a href="https://www.facebook.com/wetecno-108771234274257/" className="mx-2" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook fa-lg social"></i>
                        </a>
                        <a href="http://www.instagram.com/we.tecno" className="mx-2" rel="noreferrer" target="_blank">
                            <i className="fab fa-instagram fa-lg social"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Encabezado
