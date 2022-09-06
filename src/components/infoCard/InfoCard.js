import ItemCount from "../itemCount/ItemCount";

function InfoCard() {

    return (

        <div >
            <h5 >Producto</h5>
            <p >Descrip.</p>
            <ItemCount stock={5} initial={1}/>
        </div>

    );
  }
export default InfoCard;