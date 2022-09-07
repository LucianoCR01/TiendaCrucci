

const Item = ({title,price,img}) => {
  return (
    <>
        <img width={'200px'} src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{price}</h3>

    </>
  )
}

export default Item