import React from 'react';
import citas from '../quoteBox.json'
import Buton from './Buton';
import { useState } from 'react';

//import { useState } from 'react';

const Cita = ({changecolor, colors, color}) => {

const [i,seti] = useState(0)

function next(){
    seti(Math.round(Math.random()*((citas.length -1) - 0)+0))
     changecolor();
    }


    return (
        <div className='cita'>
            <div className='contenedor-1'>
                <div className='comilla' style={{ color: `${colors[color]}` }}>
            <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className='frase' style={{ color: `${colors[color]}` }}>{citas[i].quote}</p>
            </div>
             <Buton i={i} next={next} colors={colors} color={color}/>   
 

        </div>
    );
};

export default Cita;