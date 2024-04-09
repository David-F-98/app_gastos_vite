import React from 'react';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Header,Titulo,ContenedorHeader} from '../elements/Header';
import Boton from '../elements/Boton';
import SvgLogin from '../images/registro.svg?react'; // Forma de importar archivos SVG como componentes en React Vite
import {Formulario,Input,ContenedorBoton} from '../elements/ElementosDeFormulario';
import styled from 'styled-components';
import { auth } from '../firebase/firebaseConfig';

const Svg =  styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 1.25rem;

`;

const RegistroUsuarios = () => {
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassord] = useState('');
    const [password2, establecerPassord2] = useState('');

    const handleChange = (e) =>{
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value);
             break;
            case 'password':
                establecerPassord(e.target.value);
                break;
            case 'password2':
                establecerPassord2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Comprobamos del lado del cliente que el correo sea valido
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(correo === '' || password === '' || password2 === ''){
            console.log('Llene todos los datos');
            return;
        }

        if(!expresionRegular.test(correo)){
            console.log('por favor ingresa un correo electronico valido');
            return;
        }


        if(password !== password2){
            console.log('Las contraseñas no son iguales');
            return;
        }

        try {
            createUserWithEmailAndPassword(auth,correo,password);
        } catch (error) {
            
        }
    }

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
            <Formulario onSubmit={handleSubmit}>
                <Svg/>
                <Input 
                    type='email'
                    name='email'
                    placeholder='Correo Electrónico'
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChange}
                /> 
                <Input 
                    type='password'
                    name='password2'
                    placeholder='Confirma Contraseña'
                    value={password2}
                    onChange={handleChange}
                /> 
                <ContenedorBoton>
                    <Boton as='button' type='submit' $primario>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}
 
export default RegistroUsuarios;