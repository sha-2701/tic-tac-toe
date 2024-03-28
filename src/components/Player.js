import {useState} from 'react';

export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(isEditing ? false : true);
        // We can do the above code like this also :
        // setIsEditing(!isEditing);
        // Both the  code give us the same result
    }
    let playerName = <span className = 'player-name'>{name}</span>;
    if(isEditing){
        playerName = <input type="text" required value={name}/>
    }
    return(
      <li>
        <span className='player'>
        {playerName}
        <span className = 'player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
      );
}