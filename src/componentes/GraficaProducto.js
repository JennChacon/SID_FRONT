
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import config from '../config.json';
import { PieChart, Pie } from 'recharts';
import CircleIcon from '@mui/icons-material/Circle';

const App = () => {

  const [loading1, setLoading1] = React.useState(true)
  const [err, setErr] = React.useState(false);
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    setLoading1(true)
    const fetchEmple = async () => {
      try {
        const res = await fetch(
          config.Api.url + "product/qualification"
        );
        const respuesta = await res.json()
        console.log(respuesta.info);
        datosGrafica(respuesta.info);
        setLoading1(false)
      } catch (error) {
        setErr(true)
        setLoading1(false)
        console.log("respuesta");
      }
    };

    fetchEmple();
  }, []);

  const datosGrafica = (datos) => {
    const da = [];
    datos.map(d => {
      da.push({
        'nombre': d.product.nameReference,
        'color': d.product.color.name,
        'talla': d.product.size.name,
        'datos': [
          { name: 'MeGusta', label: d.quantityLike, fill: '#FF5936' },
          { name: 'NoMeGusta', label: d.quantityDisLike, fill: '#33E233' }
        ],
        'ean': d.product.ean
      })
    })
    setdata(da);
    console.log(da);
  }

  // Sample data
  /*  const data = [
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
   ]; */

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
        <Typography variant="h5" component="h2">
          <CircleIcon sx={{ color: '#FF5936' }} />
          No me gusta
          <CircleIcon sx={{ color: '#33E233' }} />
          Me gusta
        </Typography>
        <br></br>
      </Grid>
      {
        data.map(d =>
          <Grid item xs={4} sx={{ padding: '2%', border: '1px solid #e9e9e9' }}>
            <Typography sx={{ marginBlockEnd: '10px' }} variant="h6" component="h2">
              {d.nombre} {d.color} {d.talla}<br></br>
              Ean: {d.ean}<br></br>
            </Typography>
            <PieChart width={300} height={300} style={estiloPie}>
              <Pie data={d.datos} dataKey="label" outerRadius={100} nameKey="name" label />
            </PieChart>
          </Grid>
        )
      }
    </Grid >
  );
}

export default App;