import datos from "../Data"
import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams(); 
    const [listaProductos,setListaProductos] = useState([])

    useEffect (()=>{
        
        getProductos.then((response)=>{
            setListaProductos(response)
        })
        .catch ((error)=>console.log(error))
        },[])


    const getProductos = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(datos)
                // const datosFiltrados = datos.filter(listaProductos=>listaProductos.id === id)
                // setListaProductos(datosFiltrados)
            },2000)   
        })
    
  return (
    <>
    {console.log(id)}
    {<ItemDetail lista ={listaProductos}/>}
    </>
  )
}

export default ItemDetailContainer