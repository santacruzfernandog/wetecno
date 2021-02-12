import React from 'react'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container mt-5 py-3">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center text-white my-auto">2020 - weTecno</h3>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <h4 className="lead text-center text-white mt-5">Seguinos</h4>
                        <div className="d-flex justify-content-center mt-4">
                            <div>
                                <a href="https://www.facebook.com/wetecno-108771234274257/" className="text-white mx-3" rel="noreferrer" target="_blank"><i className="fab fa-facebook fa-lg social"></i></a>
                            </div>
    
                            <div>
                                <a href="http://www.instagram.com/we.tecno" className="text-white mx-3" rel="noreferrer" target="_blank"><i className="fab fa-instagram fa-lg social"></i></a>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-12 col-md-4">
                        <h4 className="lead text-center text-white mt-5">Escribinos</h4>
                        <div className="text-center d-flex justify-content-center align-items-center">
                            <i className="far fa-envelope fa-lg social text-white mr-1"></i>
                            <p className="text-white mb-1"> - info@wetecno.com.ar</p>
                        </div>
                    </div>
    
                    <div className="col-sm-12 col-md-4">
                        <h4 className="lead text-center text-white mt-5">Contactanos</h4>
                        <div className="text-center">
                            <a href="https://walink.co/ca2fe3" className="text-white mx-3 text-decoration-none" rel="noreferrer" target="_blank"><i className="fab fa-whatsapp fa-lg social"></i> - 011 6401 2293</a>
                        </div>
                        <div className="text-center">
                            <a href="https://walink.co/071a45" className="text-white mx-3 text-decoration-none" rel="noreferrer" target="_blank"><i className="fab fa-whatsapp fa-lg social"></i> - 011 6136 0296</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
