import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Rating } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CombinaloCon from '../pages/CombinaloCon';

const SliderProducts = ({ imagenes }) => {
    const [img, setImg] = useState(imagenes);
    
    const settings = {
        infinite: true,
        speed: 600,
        autoplay: true,
    };
    const styleA = {
        textDecoration: 'none',
        color: 'black',
    };
    
    return (
        <div>
            <Slider {...settings}>
                {
                    img.map(ele => {
                        return <div key={ele.code}>
                            <img width={305} src={ele.url} />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default SliderProducts