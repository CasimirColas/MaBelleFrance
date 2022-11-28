import React from 'react';
import "./regcard.css";
import data from "../../data/data";
import MicroMonu from '../MicroMonu/MicroMonu';


function RegCard({id, onClick}) {
    return (
        <div className='regCard'>
            <button type='submit' onClick={onClick}>X</button>
            <h3>{data.Region[id-1].name}</h3>
            <img className='imgRegion' src={data.Region[id-1].url} alt="not found"/>
            <p>{data.Region[id-1].desc}</p>
            <div className='monumentsList'>
                {data.Touristique.filter((e)=>e.id_Region===id).map((e)=><MicroMonu key={e.id} name={e.name} img={e.url} id={e.id}/>)}
            </div>
        </div>
    );
};

export default RegCard;