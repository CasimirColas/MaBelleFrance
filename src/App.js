import './App.css';
import { useEffect, useState } from 'react';
import LCard from './components/LCard/LCard';
import data from "./data/data"

function App() {
  const defaultMonu = {
    eglise:false,
    musee:false,
    monument:false,
    "site naturel":false,}
  const defaultReg = {
    GrandEst:false,
    IleDeFrance:false,
    Bretagne:false,
    ProvenceAlpesCoteDazur:false
  }
  const fkeys ={
    GrandEst:1,
    IleDeFrance:2,
    Bretagne:3,
    ProvenceAlpesCoteDazur:4
  }
  const backgrounds = [{color:"#e6ff99c",url:"https://www.vinsalsace.com/assets/img/wallpapers/400/2997-zinnkoepfle--copyrightzvardon-conseilvinsalsace__desktop_large.jpg"},
                    {color:"#fff7e6c",url:"https://media.discordapp.net/attachments/1045628698163937280/1045628966020587550/unknown.png?width=885&height=586"},
                    {color:"#ccffddc",url:"https://media.discordapp.net/attachments/301685474257534977/1045669077403844739/pexels-pierre-blache-2901211.jpg?width=885&height=498"}]
  const [search, setSearch] = useState("");
  const [monuTags, setMonuTags] = useState(defaultMonu);
  const [regTags, setRegTags] = useState(defaultReg);
  const [regList, setRegList] = useState(filterForMonu(filterForReg(data.Region.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={true}/>));
  const [monuList, setMonuList] = useState(filterForRegM(filterForMonu(data.Touristique.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={false}/>));
  const [style, setStyle] = useState(backgrounds[Math.floor(Math.random() * 3)]);
  function tagfilterMonu(tag) {
    const def = defaultMonu
    def[`${tag}`] = !monuTags[`${tag}`]
    setMonuTags(def)
  }
  function tagfilterReg(tag) {
    const def = defaultReg
    def[`${tag}`] = !regTags[`${tag}`]
    setRegTags(def)
  }
  function textChange(value) {
    setSearch(value)
  }
  function filterForMonu(array) {
    let result = array
    for(let i in Object.keys(monuTags)){
      if(monuTags[`${Object.keys(monuTags)[i]}`]===true){
        result = result.filter((e)=>e.categorie===Object.keys(monuTags)[i]) 
      }
    }
    return result
  }
  function filterForRegM(array) {
    let result = array
    for(let i in Object.keys(regTags)){
      if(regTags[`${Object.keys(regTags)[i]}`]===true){
        result = result.filter((e)=>e.id_Region===fkeys[`${Object.keys(regTags)[i]}`]) 
      }
    }
    return result
  }
  function filterForReg(array) {
    let result = array
    for(let i in Object.keys(regTags)){
      if(regTags[`${Object.keys(regTags)[i]}`]===true){
        result = result.filter((e)=>e.id===fkeys[`${Object.keys(regTags)[i]}`]) 
      }
    }
    return result
  }
  function suggestion(par1,par2) {
    if(par1.length===0 &&par2.length===0){
      return (<div className='sugg'>
        <div className='squaretxt'>
        <h3 className='sugText'>Nous n'avons pas trouve ce que vous cherchiez</h3>
        <h3 className='sugText'>Voici notre suggestion:</h3>
        </div>
        <LCard id={data.Region[1].id} nom={data.Region[1].name} img={data.Region[1].url} isReg={true}/>
      </div>)
    }
  }
  useEffect(() => {
    setRegList(filterForMonu(filterForReg(data.Region.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={true}/>))
    setMonuList(filterForRegM(filterForMonu(data.Touristique.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={false}/>))
  }, [monuTags,regTags,search]);
  return (
    <div className="top-container" style={{background:`url(${style.url})`,backgroundSize:"cover"}}>
      <div className="element-top-container" style={{background:`url(${style.url})`,backgroundSize:"cover"}}>
      <h1 className="title-homepage">Quelle region voulez-vous découvrir ?</h1>
          <div className="search-input">
            <input className="filter-button" type="text" onChange={(e)=>textChange(e.target.value)}/>
            <div className="checkboxs-chimique">
                <form>
                    <h3>Nos types de monuments</h3>
                    <input type="checkbox" checked={monuTags.eglise} onChange={()=>{tagfilterMonu("eglise")}}/>
                    <label>Eglise</label><br/>
                    <input type="checkbox" checked={monuTags.musee} onChange={()=>{tagfilterMonu("musee")}}/>
                    <label>Musee</label><br/>
                    <input type="checkbox" checked={monuTags.monument}  onChange={()=>{tagfilterMonu("monument")}}/>
                    <label>Monument</label><br/>
                    <input type="checkbox" checked={monuTags['site naturel']}  onChange={()=>{tagfilterMonu("site naturel")}}/>
                    <label>Site naturel</label><br/>
                </form>
                <form>
                    <h3>Nos regions</h3>
                    <input type="checkbox" checked={regTags.GrandEst} onChange={()=>{tagfilterReg("GrandEst")}}/>
                    <label>Grand-Est</label><br/>
                    <input type="checkbox" checked={regTags.IleDeFrance} onChange={()=>{tagfilterReg("IleDeFrance")}}/>
                    <label>Iles-de-France</label><br/>
                    <input type="checkbox" checked={regTags.Bretagne} onChange={()=>{tagfilterReg("Bretagne")}}/>
                    <label>Bretagne</label><br/>
                    <input type="checkbox" checked={regTags.ProvenceAlpesCoteDazur} onChange={()=>{tagfilterReg("ProvenceAlpesCoteDazur")}}/>
                    <label>Provence</label><br/>
                </form>
            </div>
          </div>
        </div>
        <h2 className="suggestions-title" style={{backgroundColor: "#f85151fa",width:"100%",justifyContent:"center"}}>Nos Suggestions</h2>
        <div className="suggestions-container">
      <div className='region-img-container'>
      {regList}
        {monuList}
        {suggestion(monuList,regList)}
      </div>
      </div>
    </div>
  );
}

export default App;
