
const ItemCount = ({setCount, count})=> {
    const onAdd = () => {
        setCount(count + 1 )
    }
    const onRemove = () =>{
        if (count === 0){
            return
        }
        setCount(count-1)
    }
return(
    <div>
    <p>{count}</p>
    <button onClick={onRemove}> - </button>
    <button onClick={onAdd}> + </button>
    </div>
)

}


export default ItemCount