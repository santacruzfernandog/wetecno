import React from 'react'
import oferta1 from '../img/ofertas/oferta1.jpg'
import oferta2 from '../img/ofertas/oferta2.jpg'
import oferta3 from '../img/ofertas/oferta3.jpg'

const Promociones = () => {
    return (
        <div id="promociones">
            <h3 className="text-center mt-4">Promociones</h3>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-4 promo-hover">
                        <img className="rounded" src={oferta1} width="100%" alt=""></img>
                        <a id="promoinfo" href="index.html" className="text-decoration-none">
                            <h5 className="d-flex justify-content-center text-white m-0 position-relative">Promocion 1</h5>
                            <h6 className="d-flex justify-content-center text-white m-0">Detalle</h6>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 promo-hover">
                        <img className="rounded" src={oferta2} width="100%" alt=""></img>
                        <a id="promoinfo" href="index.html" className="text-decoration-none">
                            <h5 className="d-flex justify-content-center text-white m-0">Promocion 2</h5>
                            <h6 className="d-flex justify-content-center text-white m-0">Detalle</h6>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 promo-hover">
                        <img className="rounded" src={oferta3} width="100%" alt=""></img>
                        <a id="promoinfo" href="index.html" className="text-decoration-none">
                            <h5 className="d-flex justify-content-center text-white m-0">Promocion 3</h5>
                            <h6 className="d-flex justify-content-center text-white m-0">Detalle</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promociones
