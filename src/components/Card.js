import "./styles/card.css"
import InfoCard from "./infoCard/InfoCard";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const Card = ({stock}) => {
 
  return (
    <div className="cards">
      <ItemListContainer/>
      <InfoCard/>
      {stock }
    </div>
  )
}

export default Card