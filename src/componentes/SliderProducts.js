import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Rating } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CombinaloCon from '../pages/CombinaloCon';

const SliderProducts = ({ ean }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const styleA = {
        textDecoration: 'none',
        color: 'black',
    };
    const pro = [
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-rayas-40194-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCO RAYAS L',
            'precio': '29.900',
            'ean': '7703081904696',
            'calificacion': 2.5,
            'url': 'https://www.gef.co/727584-040194'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujer_adulta/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-900-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCA L',
            'precio': '89.900',
            'ean': '7703081904726',
            'calificacion': 3.5,
            'url': 'https://www.gef.co/727584-000900'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/letit/1000x1263/camisa-mujer-letit-negro-estampado-9277-frente-gef.jpg',
            'descripcion': 'CAMISA LETIT NEGRO ESTAMPADO M',
            'precio': '64.990',
            'ean': '7703081912103',
            'calificacion': 5,
            'url': 'https://www.gef.co/727425-009277'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2021/gef/es-co/imagenes/mujer_adulta/camisas/elilena/1000x1263/camisa-mujer-adulta-elilena-blanco-estampado-39690-frente-gef.jpg',
            'descripcion': 'CAMISA ELILENA BLANCO ESTAMPADO S',
            'precio': '89.900',
            'ean': '7703081745626',
            'calificacion': 4,
            'url': 'https://www.gef.co/camisa-mujer-elilena-711556-039690'
        },
    ]
    return (
        <div>
            <h4> COMPLETA TU LOOK... </h4>
            <Slider {...settings}>
                {
                    pro.map(ele => {
                        return <div key={ele.id}>
                            <a href={`/Api/${ele.ean}`} style={styleA}>
                                <img width={130} src={ele.img} />
                                <h6>{ele.descripcion}<br></br>$ {ele.precio}<br></br>
                                <Rating name='size-small' defaultValue={ele.calificacion} precision={0.5} sx={{fontSize:'0.9rem'}} readOnly />
                                </h6>
                                </a>
                        </div>
                    })
                }
            </Slider>
            <Button sx={{paddingLeft:'167px'}} variant='text' href={`/CombinaloCon/${ean}`} endIcon={<ArrowRightAltIcon />}>
                Ver todo
            </Button>
        </div>
    );
}

export default SliderProducts