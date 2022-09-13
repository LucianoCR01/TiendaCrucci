import InfoCard from "../infoCard/InfoCard"
import "../styles/card.css"

const Item = ({title,price,img},{stock}) => {
  return (
    <div className="cards">
        <img width={'200px'} src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <InfoCard/>
        {stock}
    </div>
  )
}

export default Item