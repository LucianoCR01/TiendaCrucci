import Item from "../Item/Item"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import { useState } from "react"
import "../styles/card.css"


const ItemDetail  = ({lista}) => {
    const [count, setCount] = useState(0);

    const handleClink = () =>{
      console.log(count)
    }

    return (
      <div >
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
                            <ItemCount setCount = {setCount} count={count}/>
               <Link to ={'/cart'} onClick={handleClink}>Ir al carrito</Link>    
            </Link> 
            )
          )
        }
      </div>
    )
  }
export default ItemDetail