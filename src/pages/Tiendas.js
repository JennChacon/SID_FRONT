import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Button, Card, CardActionArea, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";

const MapView = ({datos, latitude, longitude}) => {
  const [pos, setpos] = useState([]);
  const [pos1, setpos1] = useState({});
  console.log(datos);
  console.log(latitude);
  
  const location = useLocation();
  const [state, setState] = useState({
    currentLocation: { lat: latitude, lng: longitude },
    zoom: 10,
  });
  console.log(state.currentLocation);

  const back = () => {
    window.history.back();
  }
  return (
    <div>
      <Card sx={{ maxWidth: 500, margin: '0px' }}>
        <CardActionArea>
          <Button size='small' variant='text' onClick={back} endIcon={<ArrowBackIosIcon />}>
          </Button>
        </CardActionArea>
        <Typography variant='h6' component='h2'>
          Tiendas
        </Typography>
        <MapContainer center={state.currentLocation} zoom={state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {
            datos.map((d) => {
              return <Marker key={d.serial} position={d.geography}>
                <Popup>
                  <Typography><b>{d.name}</b></Typography>
                  <Typography><b>Direccion:</b> {d.address}</Typography>
                  <Typography><b>Unidades disponibles:</b> {d.stock}</Typography>
                </Popup>
              </Marker>
            })
          }
          ));
        </MapContainer>
      </Card >
    </div >
  );
};

export default MapView;