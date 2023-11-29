import React, { useState } from 'react'
import './style.css';
function Bmi() {
    const[height,setHeight]=useState(0);
    const[weight,setWeight]=useState(0);
    const[Bmi,setBmi]=useState('');
    const calculateBmi=()=>{
        let h=height/100;
       let divid=(weight/(h*h)).toFixed(2);
        setBmi(divid);
    }
  return (
    <div className='bmi-box'>
        <div className='input-fields'>
        <h2>Height in CM</h2>
        <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} ></input>
        <h2>Weight in Kg</h2>
        <input type='number' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
        </div>
        <button onClick={calculateBmi}>Calculate</button>
        {Bmi && <h1>{Bmi}</h1>
}</div>

  )
}

export default Bmi
