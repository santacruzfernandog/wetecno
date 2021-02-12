import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-none" id="menu-navegacion">
                <div className="container my-1">

                    {/* Menu Hamburguesa */}
                    <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#inicio" className="nav-link py-0 active">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#promociones" className="nav-link py-0">Promociones</a>
                            </li>
                            <li className="nav-item">
                                <a href="#catalogo" className="nav-link py-0">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a href="#llamado-accion" className="nav-link py-0">Banner</a>
                            </li>
                            <li className="nav-item">
                                <a href="#servicios" className="nav-link py-0">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a href="#galeria" className="nav-link py-0">Galeria</a>
                            </li>
                            <li className="nav-item">
                                <a href="#footer" className="nav-link py-0">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
