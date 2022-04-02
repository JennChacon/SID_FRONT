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
          <NavLink to='/CombinaloCon/:ean' className="oculto"
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
          <NavLink to='/Map' className="oculto"
            exact
            activeClassName="active">
            Map
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
            <Route path="/CombinaloCon/:ean" exact render={() => {
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
            <Route path="/Map" exact render={() => {
              return <div>
                <Map />
              </div>
            }}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
