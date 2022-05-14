import React, { useEffect, useState } from 'react';
import Cargando from '../componentes/Cargando';
import Error from '../componentes/Error';
import UnionDatos from '../componentes/UnionDatosEan';
import config from '../config.json';
import { useParams } from 'react-router-dom';

// se escribe solo rcc y crea un react, component, class

const Api = () => {
    const {ean} = useParams();
    
    const [Producto, setProducto] = useState({})
    const [err, setErr] = useState(false)
    const [loading1, setLoading1] = useState(true)

    //se ejecuta una vez el componente a sido cargado en pantalla

    useEffect(() => {
        setLoading1(true)
        const fetchData = async () => {
            try {
                const res = await fetch(
                    config.Api.url + "product/" + ean
                );
                const respuesta = await res.json()
                setProducto(respuesta.info)
                console.log(respuesta.info)
                setLoading1(false)
            } catch (error) {
                setErr(true)
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {
                err
                    ? <Error />
                    : loading1
                        ? <Cargando />
                        : <UnionDatos datos={Producto} />
            }
        </div>
    )
}

export default Api;