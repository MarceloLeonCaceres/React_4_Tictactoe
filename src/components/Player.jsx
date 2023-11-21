import { useState } from "react";

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);
    
    let playerName = <span className="player-name">{name}</span>;
    let buttonName = "Edit";

    function handleEditClick(){                
        setIsEditing(isEditing => !isEditing);
    }

    if(isEditing){
        playerName = <input type="text" required placeholder="Ingresa tu dato"></input>;
        buttonName = "Save";
    }
    
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonName}</button>
        </li>
    );
}