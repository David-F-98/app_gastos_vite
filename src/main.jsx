import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contenedor from './elements/Contenedor.jsx';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import EditarGasto from './components/EditarGasto.jsx';
import GastosPorCategoria from './components/GastosPorCategoria.jsx';
import InicioDeSesion from './components/InicioDeSesion.jsx';
import ListaDeGastos from './components/ListaDeGastos.jsx';
import RegistroUsuarios from './components/RegistroUsuarios.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import favicon from './images/logo.png';
import Fondo from './elements/Fondo.jsx';



WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Helmet>
      <link rel='shortcut icon' href={favicon} type='image/x-icon' />
    </Helmet>
    <React.StrictMode>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/iniciar-sesion' element={<InicioDeSesion/>}></Route>
            <Route path='/crear-cuenta' element={<RegistroUsuarios/>}></Route>
            <Route path='/categorias' element={<GastosPorCategoria/>}></Route>
            <Route path='/lista' element={<ListaDeGastos/>}></Route>
            <Route path='/editar/:id' element={<EditarGasto/>}></Route>
            <Route path='/' element={<App/>}></Route>
          </Routes>
          {/* <App /> */}
        </Contenedor>
      </BrowserRouter>

      <Fondo/>
    </React.StrictMode>,
  </HelmetProvider>
)
