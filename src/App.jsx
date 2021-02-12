import React from 'react';
import Banner from './components/Banner';
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Info from './components/Info';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import NuestrosServicios from './components/NuestrosServicios';
import Productos from './components/Productos';
import Promociones from './components/Promociones';
import Separador from './components/Separador';
import Separador2 from './components/Separador2';
import WhatsappIcon from './components/WhatsappIcon';



function App() {

  return (
      <div>
        <Encabezado/>
        <Navbar/>
        <Jumbotron/>
        <Promociones/>
        <Separador/>
        <Productos/>
        <Banner/>
        <Separador2/>
        <NuestrosServicios/>
        <Galeria/>
        <Info/>
        <Footer/>
        <WhatsappIcon/>
      </div>
  );
}

export default App;
