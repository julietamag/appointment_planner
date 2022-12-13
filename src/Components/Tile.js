export const Tile = (props) => {
    function handleDelete() {
        props.deleteObj(props.obj.id)
    }

    const objWithoutId = {
        ...props.obj,
        id: undefined
    };

    return (
        <div className='tile-container'>
            {Object.values(objWithoutId).filter(Boolean)
                .map((item, index) =>
                    (<p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{item}</p>)
                )}
            <button onClick={handleDelete}>Borrar</button>
        </div>
    );
};
