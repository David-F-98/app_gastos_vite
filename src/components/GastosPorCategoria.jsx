import React from 'react';
import {Header,Titulo,ContenedorHeader} from '../elements/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BtnRegresar from '../elements/BtnRegresar';
const GastosPorCategoria = () => {
    return ( 
    <HelmetProvider>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>

      <Header>
          <BtnRegresar/>
          <Titulo>Gastos por categoría</Titulo>
      </Header>
    </HelmetProvider>
     );
}
 
export default GastosPorCategoria;