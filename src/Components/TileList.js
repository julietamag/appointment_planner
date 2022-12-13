import {Tile} from './Tile'

export const TileList = (props) => {
    return (
      <div className='tile'>
      {props.list.map((item) => {
        return <Tile obj={item} key={item.id} deleteObj={props.deleteObj} />
      })}
      </div>
    );
  };