import React from 'react'

const WhatsappIcon = () => {
    return (
        <>
            <div id="whatsapp-icon">
                <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">
                    <i className="fab fa-whatsapp bg-success d-flex justify-content-center align-items-center"></i>
                </a>
            </div>

        {/* Modal Fixed WhatsApp Icon */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Escribinos a</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <a href="https://walink.co/ca2fe3" className="mx-3 text-decoration-none text-dark" rel="noreferrer" target="_blank"><i className="fab fa-whatsapp fa-lg social"></i> - Opcion 1 {/* 011 6401 2293 */} </a>
                            </div>
                            <div className="text-center">
                                <a href="https://walink.co/071a45" className="mx-3 text-decoration-none text-dark" rel="noreferrer" target="_blank"><i className="fab fa-whatsapp fa-lg social"></i> - Opcion 2 {/* 011 6136 0296 */} </a>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                                <i className="fas fa-times"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-sm" data-dismiss="modal">
                                <i className="fas fa-thumbs-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsappIcon
