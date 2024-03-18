import React from 'react';
import {Header,Titulo} from '../elements/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BtnRegresar from '../elements/BtnRegresar';

const ListaDeGastos = () => {
    return ( 
        <HelmetProvider>
        <Helmet>
          <title>Lista de gastos</title>
        </Helmet>
  
        <Header>
            <BtnRegresar/>
            <Titulo>Lista de gastos</Titulo>
        </Header>
      </HelmetProvider>
     );
}
 
export default ListaDeGastos;