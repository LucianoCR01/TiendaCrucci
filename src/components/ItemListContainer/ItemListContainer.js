import datos from "../Data"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
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
    <ItemList lista ={listaProductos}/>
    </>
  )
}

export default ItemListContainer