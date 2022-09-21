
const Item = ({title,price,img}) => {
  return (
    <div className="cards">
        <img width={'200px'} src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{price}</h3>
    </div>
  )
}

export default Item