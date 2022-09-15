import "./styles/navBar.css"
import carrito from "./img/carritoNavBar.png"
import { NavLink } from "react-router-dom"



const NavBar = () => {
  return (
    <div className="NavBar">
        <h2 className="h2">Tienda <span className="span">Crucci</span></h2> 
        <div>
          <NavLink to={'/'} className={({isActive})=>(isActive?'rojo':'blanco')}>Home</NavLink>
          <NavLink to={'/Contacto'} className={({isActive})=>(isActive?'rojo':'blanco')}>Contacto</NavLink>
          <NavLink to={'/Computadoras'} className={({isActive})=>(isActive?'rojo':'blanco')}>Computadoras</NavLink>
          <NavLink to={'/Teclados'} className={({isActive})=>(isActive?'rojo':'blanco')}>Teclados</NavLink>
        </div>
        <img src={carrito} className="carrito" alt="Carrito"/>
    </div>
  )
}
export default NavBar
