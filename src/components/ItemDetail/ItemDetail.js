import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ItemDetail  = ({lista}) => {

    return (
      <>
        {
          lista.map((produc)=>(
            <Link 
            key={produc.id}
            to ={'/detail/' + produc.id}
            style={{textDecoration: 'none', color:'black' }}
            >
              <Item
                  propiedad={produc.propiedad} 
                  title={produc.title} 
                  price={produc.price} 
                  img={produc.img}/>    
            </Link> 
            )
          )
        }
      </>
    )
  }
export default ItemDetail