import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Header,Titulo,ContenedorHeader} from '../elements/Header';
import Boton from '../elements/Boton';
import SvgLogin from '../images/login.svg?react'; // Forma de importar archivos SVG como componentes en React Vite
import {Formulario,Input,ContenedorBoton} from '../elements/ElementosDeFormulario';
import styled from 'styled-components';

const Svg =  styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 1.25rem;

`;

const InicioDeSesion = () => {
    return ( 
        <>
        <HelmetProvider>
            <Helmet>
                <title>Iniciar Sesión</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesión</Titulo>
                    <div>
                        <Boton to='/crear-cuenta'>Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
        </HelmetProvider>
        <Formulario>
            <Svg/>
            <Input 
                type='email'
                name='email'
                placeholder='Correo Electrónico'

            />
            <Input 
                type='password'
                name='password'
                placeholder='Contraseña'

            /> 
            <ContenedorBoton>
                <Boton as='button' type='submit' $primario>Iniciar Sesión</Boton>
            </ContenedorBoton>
        </Formulario>
    </>
     );
}
 
export default InicioDeSesion;