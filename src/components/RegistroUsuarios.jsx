import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Header,Titulo,ContenedorHeader} from '../elements/Header';
import Boton from '../elements/Boton';
import SvgLogin from '../images/registro.svg?react'; // Forma de importar archivos SVG como componentes en React Vite
import {Formulario,Input,ContenedorBoton} from '../elements/ElementosDeFormulario';
import styled from 'styled-components';

const Svg =  styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 1.25rem;

`;

const RegistroUsuarios = () => {
    return ( 
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Crear cuenta</title>
                </Helmet>

                <Header>
                    <ContenedorHeader>
                        <Titulo>Crear Cuenta</Titulo>
                        <div>
                            <Boton to='/iniciar-sesion'>Iniciar Sesion</Boton>
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
                <Input 
                    type='password'
                    name='password2'
                    placeholder='Confirma Contraseña'

                /> 
                <ContenedorBoton>
                    <Boton as='button' type='submit' $primario>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}
 
export default RegistroUsuarios;