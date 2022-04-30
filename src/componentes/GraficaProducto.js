
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import { PieChart, Pie } from 'recharts';
import CircleIcon from '@mui/icons-material/Circle';

const App = () => {

  // Sample data
  const data = [
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
    {
      ean: 12345, nombre: "camisa levis", color: "blanco", talla: "XS",
      datos: [
        { name: 'MeGusta', label: 400, fill: '#FF5936' },
        { name: 'NoMeGusta', label: 700, fill: '#33E233' }
      ]
    },
  ];

  const back = () => {
    window.history.back();
  }

  const estiloPie = {
    marginLeft: '8%',
  }
  return (
    <Grid container sx={{ padding: '1% 5% 1% 5%', textAlign: 'center' }}>
      <Grid item xs={12}>
        <Button size='large' variant='text' sx={{ right: '590px', color: 'black', marginBlockEnd: '1%' }} onClick={back} endIcon={<ArrowBackIosIcon />}>
        </Button>
      </Grid>
      <Grid item xs={12}>
      <Typography sx={{ marginBlockEnd: '10px' }} variant="h5" component="h2">
        Calificación de productos
      </Typography>
      </Grid>
      {
        data.map(d =>
          <Grid item xs={3} sx={{ padding: '2%', border: '1px solid #e9e9e9' }}>
            <Typography sx={{ marginBlockEnd: '10px' }} variant="h6" component="h2">
              {d.nombre} {d.color} {d.talla}<br></br>
              Ean: {d.ean}<br></br>
            </Typography>
            <PieChart width={200} height={200} style={estiloPie}>
              <Pie data={d.datos} dataKey="label" nameKey="name" label />
            </PieChart>
            <Grid container sx={{ marginLeft: '-1%' }}>
              <Grid item xs={6}>
                {d.datos.name = 'MeGusta' ? <CircleIcon sx={{ color: '#FF5936' }} /> : ''}
                No me gusta
              </Grid>
              <Grid item xs={6}>
                {d.datos.name = 'NoMeGusta' ? <CircleIcon sx={{ color: '#33E233' }} /> : ''}
                Me gusta
              </Grid>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
}

export default App;