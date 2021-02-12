import React from 'react'
import carousel1 from '../img/carousel/carousel1.jpg'
import carousel2 from '../img/carousel/carousel2.jpg'
import carousel3 from '../img/carousel/carousel3.jpg'
import carousel4 from '../img/carousel/carousel4.jpg'
import carousel5 from '../img/carousel/carousel5.jpg'


const Jumbotron = () => {
    return (
        <div className="container">
            <div className="row">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={carousel1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carousel2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carousel3} alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carousel4} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={carousel5} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
