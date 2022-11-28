import React from 'react';
import "./moncard.css";
import data from '../../data/data';

function MonCard({ id,  onClick}) {
return(
    <div className='monCard'>
    <button onClick={onClick}>X</button>
    <h3>{data.Touristique[id-1].name}</h3>
    <img src={data.Touristique[id-1].url} alt="not found"/>
    <p>{data.Touristique[id-1].desc}</p>
</div>
)
};

export default MonCard;