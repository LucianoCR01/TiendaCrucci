import "./styles/navBar.css"
import carrito from "./img/carritoNavBar.png"
const NavBar = () => {
  return (
    <div className="NavBar">
        <h2 className="h2">Tienda <span className="span">Crucci</span></h2> 
        <div>
        <a href="/" className="link">Home</a>
        <a href="/" className="link">Oferta</a>
        <a href="/" className="link">Usuario</a>
        <a href="/" className="link">Contacto</a>
        </div>
        <img src={carrito} className="carrito" alt="Carrito"/>
    </div>
  )
}
export default NavBar
