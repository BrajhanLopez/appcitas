import React from 'react';
//import Buton from './Cita';
import citas from '../quoteBox.json'
//import { useState } from 'react';

//const colores = ['red', 'blue', 'yellow']



const Buton = ({i, next, color, colors}) => {
//const [i, seti] = useState(0)





    return (
        <div className='div-cita'>
            <p className='autor' style={{ color: `${colors[color]}` }}>{citas[i].author}</p>
            <div className='contenedor-boton'>
                <div></div>
            <div className='boton' onClick={next} style={{ background: `${colors[color]}` }}>
                <i className="fa-solid fa-angle-right"></i> 
                </div>
            </div>
        </div>
    );
};

export default Buton;
