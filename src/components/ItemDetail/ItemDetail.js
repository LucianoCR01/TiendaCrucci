import Item from "../Item/Item"
import "../styles/card.css"


const ItemDetail  = ({lista}) => {

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
export default ItemDetail