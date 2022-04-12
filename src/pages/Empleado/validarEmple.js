import { Container } from '@mui/material';
import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';

const Inicio = () => {
  const { cedula } = useParams();

  return (
    <div>
      {
        cedula ?
          <Redirect to='/Empleado/LeerBono' />
          :
          'nop'
      }
    </div>
  );
}
export default Inicio