import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import config from '../../config.json';
import DetalleBono from '../Empleado/DetalleBono';

const Inicio = () => {
  const { Bono } = useParams();
  const [apiBono, setapiBono] = React.useState({});
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    console.log("respuesta");
    console.log(Bono);
    const fetchBono = async () => {
      try {
        const res = await fetch(
          config.Api.Bono + Bono
        );
        const respuesta = await res.json()
        console.log(respuesta);
        setapiBono(respuesta.info);
      } catch (error) {
        setErr(true)
      }
    };

    fetchBono();

  }, []);
  /* <Redirect to={`/Empleado/DetalleBono/${Bono}`} /> */
  return (
    <div>
      {
        Bono ?
          <DetalleBono datos={apiBono} />
          :
          'nop'
      }
    </div>
  );
}
export default Inicio