import React from 'react'
import {db, storage} from '../firebase'
import prod1 from '../img/productos/1.png'


const Productos = () => {

    const [productos, setProductos] = React.useState([])

    React.useEffect(()=> {
        const obtenerProductos = async()=>{
          try {
              //Trae info de la db
              const data = await db.collection('productos').get()
              //console.log(data.docs)

              //Armado del objeto
              const arrayData = data.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
              }))
              //console.log(arrayData)
              setProductos(arrayData)

          } catch (error) {
            console.log(error)
          }
        }
        obtenerProductos()
    })

    /* const subirImagen = async(imagen) => {

        try {
            const nuevaImagen = imagen.target.files[0]

            if(nuevaImagen.type === 'image/png' || nuevaImagen.type === 'image/jpg' || nuevaImagen.type === 'image/jpeg'){
                const data = await db.collection('productos').get()
                const imagenRef = storage.ref().child(data.id).child(nuevaImagen.name)
                await imagenRef.put(imagen)
                const imagenURL = await imagenRef.getDownloadURL()
            }
        } catch (error) {
            console.log(error)
        }
    } */



    return (
        <div id="catalogo">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center" id="ads">
                    {/* Products Card */}
                    {
                        productos.map(prod => (
                            <div className="col-md-3" key={prod.id}>
                                <div className="card rounded">
                                    <div className="card-image">
                                        <a href="">
                                            <img className="img-fluid" src={prod1} alt=""/>
                                        </a>
                                    </div>
                                    <div className="card-body text-center p-0">
                                        <div id="card-title" className="">
                                            <a href="" className="text-dark">
                                                <small>{prod.nombre}</small>
                                            </a><br/>
                                            <small><strong>${prod.precio}.-</strong></small>
                                        </div>
                                        <small className="d-block text-small text-center borde-wetecno color-wetecno py-1">6 cuotas sin interes</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
    
                <div className="row">
                    <div className="col-sm-12 col-md-7 mx-auto my-4">
                        <a role="button" href="views/catalogo.html" className="btn btn-wetecno btn-block">Ver todos los productos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos
