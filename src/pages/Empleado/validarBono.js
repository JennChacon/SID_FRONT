import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';

const Inicio = () => {
  const { Bono } = useParams();

  return (
    <div>
      {
        Bono ?
          <Redirect to={`/Empleado/DetalleBono/${Bono}`} />
          :
          'nop'
      }
    </div>
  );
}
export default Inicio