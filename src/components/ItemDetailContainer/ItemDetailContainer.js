import datos from "../Data"
import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {
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
            },2000)   
        })
    


  return (
    <>
    <ItemDetail lista ={listaProductos}/>
    </>
  )
}

export default ItemDetailContainer