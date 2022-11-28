import {useState} from 'react';
import RegCard from '../RegCard/RegCard';
import MonCard from '../MonCard/MonCard';

const LCard = ({id,nom,img, isReg}) => {
    const [displayCard, setDisplayCard] = useState(false);
    const [pointerEv, setPointerEv] = useState("auto");
    function clickOpen() {
        if(displayCard===false){
            setDisplayCard(true)
            setPointerEv("none")
            window.scrollTo(0, 0)
        }
    }
    function clickClose() {
        setDisplayCard(false)
        setPointerEv("auto")
    }
    function onDisplay() {
        if(displayCard){
            if(isReg){
                return<RegCard id={id} onClick={clickClose}/>
            }else{
                return<MonCard id={id} onClick={clickClose}/>
            }
        }
    }
    return (
        <div className='region-img' style={{background: `url(${img})`,pointerEvents: pointerEv,backgroundSize:"cover"}} onClick={clickOpen}>
            <h3>{nom}</h3>
            {onDisplay()}
        </div>
    );
};

export default LCard;