import { useState } from "react";

function ItemCount ({stock}) {
    const [cantidad, setCantidad] = useState(stock);
    return(
        <>

        {cantidad===0 ? null : <button onClick={()=>setCantidad(cantidad-1)} >Agregar Carrito</button>}
        {cantidad ===stock ? null : <button onClick={()=>setCantidad(cantidad+1)} >Quitar Carrito</button>}
        <p>La cantidad de stock es: {cantidad}</p>
        </>
        
    );
}


export default ItemCount