import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import data from "../static/data.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Button, Card, CardActionArea, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";

const MapView = (props) => {
  const location = useLocation();
  const [state, setState] = useState({
    currentLocation: { lat: location.state.latitude, lng: location.state.longitude },
    zoom: 10,
    data,
  });
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
            data.map((place, i) => {
              return <Marker key={i} position={place.geometry} >
                <Popup>
                  <Typography><b>{place.name}</b></Typography>
                  <Typography><b>Direccion:</b> {place.description}</Typography>
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