import {Tile} from './Tile'

export const TileList = (props) => {
    return (
      <div className='tile'>
      {props.list.map((item, index) => {
        return <Tile obj={item} key={index} />
      })}
      </div>
    );
  };