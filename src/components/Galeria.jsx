import React from 'react'
import image1 from '../img/galeria/galery1.png'
import image2 from '../img/galeria/galery2.png'
import image3 from '../img/galeria/galery3.png'
import image4 from '../img/galeria/galery4.png'


const Galeria = () => {
    return (
        <div id="galeria">
            <div className="row my-4 no-gutters">
                <div className="col-sm-12 col-md-3">
                    <img src={image1} alt="" className="img-fluid"></img>
                </div>
                <div className="col-sm-12 col-md-3">
                  <img src={image2} alt="" className="img-fluid"></img>
              </div>
              <div className="col-sm-12 col-md-3">
                  <img src={image3} alt="" className="img-fluid"></img>
              </div>
              <div className="col-sm-12 col-md-3">
                  <img src={image4} alt="" className="img-fluid"></img>
              </div>
            </div>
        </div>
    )
}

export default Galeria
