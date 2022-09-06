import "./styles/card.css"
import ItemCount from './itemCount/ItemCount';
import { useEffect, useState } from "react"
import InfoCard from "./infoCard/InfoCard";

const Card = ({stock}) => {

  // const [contadorSuma,setSuma]=useState(-1)
  // useEffect (()=>{
  //   setSuma(contadorSuma+1)},[stock]);
    
  return (
    <div className="cards">
      <InfoCard/>
      {stock }
      {/* {contadorSuma} */}
    </div>
  )
}

export default Card