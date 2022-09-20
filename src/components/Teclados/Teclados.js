import datos from "../Data"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import TecladosDeta from "./TecladosDeta"

const Teclados = () => {
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
              const datosFiltrados = datos.filter(listaProductos=>listaProductos.id === id)
              setListaProductos(datosFiltrados)
          },2000)   
      })
  
return (
  <>
  <TecladosDeta lista={listaProductos}/>
  </>
)
}


export default Teclados