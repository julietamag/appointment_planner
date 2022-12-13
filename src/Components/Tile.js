export const Tile = (props) => {

    return (
        <div className="tile-container">
            {Object.values(props.obj).map((item, index) => <p id={index}>{item}</p>)}
        </div>
    );
};
