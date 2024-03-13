import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Header,Titulo,ContenedorBotones,ContenedorHeader} from './elements/Header';
import Boton from './elements/Boton';


const App = () => {
  return ( 
    <HelmetProvider>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/link'>Categorías</Boton>
            <Boton to='/categorias'>Lista de Gastos</Boton>
            <Boton to='/'>x</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </HelmetProvider>
  );
}
 
export default App;