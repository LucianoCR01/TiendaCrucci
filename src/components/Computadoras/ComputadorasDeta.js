import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ComputadorasDeta = ({lista}) => {
    const arr = lista.filter((ele)=>(ele.propiedad.includes('PC')))
    return (
        <>
        {console.log(arr)}
        {   arr.map(ele => (
            <Link 
            key={ele.id}
            to ={'/detail/' + ele.id}
            style={{textDecoration: 'none', color:'black' }}
            >
            <Item
            propiedad={ele.propiedad} 
            title={ele.title} 
            price={ele.price} 
            img={ele.img}/>    
            </Link> 
        ))
        }

        </>
      )
    }

export default ComputadorasDeta