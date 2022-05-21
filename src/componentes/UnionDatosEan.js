import Producto from './Producto';
import config from '../config.json'
import { Redirect } from 'react-router-dom';
import { color } from '@mui/system';
import Cargando from '../componentes/Cargando';
import Error from '../componentes/Error';
import React from 'react';

const UnionDatosEan = ({ datos: DatosP }) => {
  const [Imagenes, setImagenes] = React.useState({});
  const [Tallas, setTallas] = React.useState({});
  const [Colores, setColores] = React.useState({});
  const [err, setErr] = React.useState(false)
  const [loading1, setLoading1] = React.useState(true)
  const [loading2, setLoading2] = React.useState(true)
  const [loading3, setLoading3] = React.useState(true)

  React.useEffect(() => {
    setLoading1(true)
    setLoading2(true)
    setLoading3(true)
    const fetchImages = async () => {
      try {
        const res = await fetch(
          config.Api.url + "product/images/" + DatosP.ean
        );
        const respuesta = await res.json()
        setImagenes(respuesta.info)
        console.log(respuesta.info)
        setLoading1(false)
      } catch (error) {
        setErr(true)
      }
    };

    const fetchTallas = async () => {
      try {
        const res = await fetch(
          config.Api.url + "product/talla-referencia/" + DatosP.codeReference
        );
        const respuesta = await res.json()
        setTallas(respuesta.info)
        console.log(respuesta.info)
        setLoading2(false)
      } catch (error) {
        setErr(true)
      }
    };

    const fetchColores = async () => {
      try {
        const res = await fetch(
          config.Api.url + "product/color-referencia/" + DatosP.codeReference
        );
        const respuesta = await res.json()
        setColores(respuesta.info)
        console.log(respuesta.info)
        setLoading3(false)
      } catch (error) {
        setErr(true)
      }
    };

    fetchImages();
    fetchTallas();
    fetchColores();
  }, []);

  const double = (pre) => {
    const preci = parseFloat(pre).toLocaleString('en')
    return preci.replace(',', '.')
  }

  //'ImgColor':concatenar(DatosE.storeID,DatosE.attributes[1].values[0].image1path),
  const datos = {
    'Nombre': DatosP.nameReference + " " + DatosP.color.name + " " + DatosP.size.name,
    'Precio': double(DatosP.price),
    'DescripcionCorta': DatosP.nameReference,
    'Descripcion': DatosP.nameReference + " de color " + DatosP.color.name + " en talla " + DatosP.size.name + " con un precio de " + double(DatosP.price),
    'Imagen': Imagenes,
    'Talla': DatosP.size.name,
    'Tallas': Tallas,
    'Ean': DatosP.ean,
    'Tienda': 'Gef',
    'Composicion': 'Composición: Algodón',
    'Color': DatosP.color.name,
    'Colores': Colores,
    'Calificacion' : DatosP.qualificationId,
    'Ocasion': DatosP.ocassionTypeId
  };

  return (
    <div>
      {
        err
          ? <Error />
          : loading1 || loading2 || loading3
            ? <Cargando />
            :
            <Producto datos={datos} />
      }
    </div>
  );
}

export default UnionDatosEan