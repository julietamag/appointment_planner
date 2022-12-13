export const Tile = (props) => {
    function handleDelete(e){
        console.log(props.obj.id)
        props.deleteObj(props.obj.id)
    }
    return (
        <div className="tile-container">
            {Object.values(props.obj).map((item, index) => <p id={index}>{item}</p>)}
            <button onClick={handleDelete}>Borrar</button>
        </div>
    );
};
