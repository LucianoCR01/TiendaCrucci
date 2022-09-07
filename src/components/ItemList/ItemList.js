import Item from "../Item/Item"

const ItemList = ({lista}) => {

  return (
    <>
    {
        lista.map((produc)=>(
            <Item 
                key={produc.id}
                title={produc.title} 
                price={produc.price} 
                img={produc.img}/>
            ))
    }
    </>
  )
}

export default ItemList