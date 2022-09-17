import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ComputadorasDeta = ({lista}) => {
    const arr = lista.filter((ele)=>(ele.propiedad.includes('PC')))
    return (
        <>
        {console.log(arr)}
        {  
            <Link 
            key={arr.id}
            to ={'/detail/' + arr.id}
            style={{textDecoration: 'none', color:'black' }}
            >
            <Item
            propiedad={arr.propiedad} 
            title={arr.title} 
            price={arr.price} 
            img={arr.img}/>    
            </Link> 
        }
        </>
      )
    }

export default ComputadorasDeta