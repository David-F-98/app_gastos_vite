import React from 'react';
import {Header,Titulo,ContenedorHeader} from '../elements/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const GastosPorCategoria = () => {
    return ( 
    <HelmetProvider>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Gastos por categoría</Titulo>
        </ContenedorHeader>
      </Header>
    </HelmetProvider>
     );
}
 
export default GastosPorCategoria;