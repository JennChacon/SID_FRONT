import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Cargando from "./Cargando";
import Tiendas from '../pages/Tiendas';
import config from '../config.json';

const Map = () => {
  const [data, setdata] = useState({});
  const [longitude, setlongitude] = useState(0);
  const [latitude, setlatitude] = useState(0);
  const { ean } = useParams();
  const [err, setErr] = React.useState(false);
  const [loading1, setLoading1] = React.useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    function (position) {
      setlongitude(position.coords.longitude);
      setlatitude(position.coords.latitude);
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    },
    {
      enableHighAccuracy: true,
    })
    setLoading1(true)
    const fetchLocalizacion = async () => {
      try {
        const res = await fetch(
          config.Api.url + "location/" + ean
        );
        const respuesta = await res.json()
        setdata(respuesta.info);
        console.log(respuesta.info)
        setLoading1(false)
      } catch (error) {
        setErr(true)
      }
    };

    fetchLocalizacion();
  }, []);


  return (
    <div>
      {
        loading1 ?
          <Cargando />
          :
          <Tiendas datos={data} latitude={latitude} longitude={longitude} />
      }
    </div>
  );
};

export default Map;