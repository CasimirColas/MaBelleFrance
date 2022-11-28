import { useState } from "react";
import MonCard from "../MonCard/MonCard";

function MicroMonu({id,img,name}) {
    const [displayMonu, setDisplayMonu] = useState(false);
    function clickOpen() {
        if(displayMonu===false){
            setDisplayMonu(true)
        }
    }
    function clickClose() {
        setDisplayMonu(false)
    }
    return (<div className="microMonu" style={{background: `url(${img})`, backgroundSize:"cover"}} onClick={clickOpen}>
        <h5 className="textmicromonu">{name}</h5>
        {displayMonu? <MonCard id={id} onClick={clickClose}/>:null}
    </div>);
}

export default MicroMonu;