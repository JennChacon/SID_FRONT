import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import LeerBarcode from './pages/LeerBarcode';
import Formulario from './pages/Formulario';
import Inicio from './pages/Inicio';
import CombinaloCon from './pages/CombinaloCon';
import Tiendas from './pages/Tiendas';
import Api from './pages/Api';
import Map from './componentes/Map';
import InicioEmple from './pages/Empleado/InicioEmple';
import ValidarEmple from './pages/Empleado/validarEmple';
import LeerBono from './pages/Empleado/LeerBono';
import ValidarBono from './pages/Empleado/validarBono';
import DetalleBono from './pages/Empleado/DetalleBono';
import GraficaProducto from './componentes/GraficaProducto';

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <NavLink to='/' className="oculto"
            exact
            activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to='/home' className="oculto"
            exact
            activeClassName="active">
            Home
          </NavLink>
          <NavLink to='/barcode' className="oculto"
            exact
            activeClassName="active">
            Barcode
          </NavLink>
          <NavLink to='/Formulario' className="oculto"
            exact
            activeClassName="active">
            Formulario
          </NavLink>
          <NavLink to='/CombinaloCon/:ocasion' className="oculto"
            exact
            activeClassName="active">
            Combinalo
          </NavLink>
          <NavLink to='/Api/:ean' className="oculto"
            exact
            activeClassName="active">
            Api
          </NavLink>
          <NavLink to='/Tiendas' className="oculto"
            exact
            activeClassName="active">
            Tiendas
          </NavLink>
          <NavLink to='/Map/:ean' className="oculto"
            exact
            activeClassName="active">
            Map
          </NavLink>
          <NavLink to='/Empleado' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <NavLink to='/Empleado/ValidarEmple/:cedula' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <NavLink to='/Empleado/LeerBono' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <NavLink to='/Empleado/ValidarBono/:Bono' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <NavLink to='/Empleado/DetalleBono/:Bono' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <NavLink to='/Empleado/ProductosCalificados' className="oculto"
            exact
            activeClassName="active">
            Empleado
          </NavLink>
          <Switch>
            <Route path="/" exact render={() => {
              return <div>
                <Inicio />
              </div>
            }}></Route>
            <Route path="/home" exact render={() => {
              return <div>
                <Home />
              </div>
            }}></Route>
            <Route path="/barcode" exact render={() => {
              return <div>
                <LeerBarcode />
              </div>
            }}></Route>
            <Route path="/Formulario" exact render={() => {
              return <div>
                <Formulario />
              </div>
            }}></Route>
            <Route path="/CombinaloCon/:ocasion" exact render={() => {
              return <div>
                <CombinaloCon />
              </div>
            }}></Route>
            <Route path="/Api/:ean" exact render={() => {
              return <div>
                <Api />
              </div>
            }}></Route>
            <Route path="/Tiendas" exact render={() => {
              return <div>
                <Tiendas />
              </div>
            }}></Route>
            <Route path="/Map/:ean" exact render={() => {
              return <div>
                <Map />
              </div>
            }}></Route>
            <Route path="/Empleado" exact render={() => {
              return <div>
                <InicioEmple />
              </div>
            }}></Route>
            <Route path="/Empleado/ValidarEmple/:cedula" exact render={() => {
              return <div>
                <ValidarEmple />
              </div>
            }}></Route>
            <Route path="/Empleado/LeerBono" exact render={() => {
              return <div>
                <LeerBono />
              </div>
            }}></Route>
            <Route path="/Empleado/ValidarBono/:Bono" exact render={() => {
              return <div>
                <ValidarBono />
              </div>
            }}></Route>
            <Route path="/Empleado/DetalleBono/:Bono" exact render={() => {
              return <div>
                <DetalleBono />
              </div>
            }}></Route>
            <Route path="/Empleado/ProductosCalificados" exact render={() => {
              return <div>
                <GraficaProducto />
              </div>
            }}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
