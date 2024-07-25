import React from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

  const [ playerName, setPlayerName] = React.useState(initialName);
  const [ isEditing, setIsEditing ] = React.useState(false);

  function handleEdit() {
    // setIsEditing(isEditing? false : true);
    setIsEditing(editing => !editing); // scdedule a state update to true or false
    if (isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;


  if (isEditing) {
    editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange}/>
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit} >{isEditing? 'Save' : 'Edit'}</button>
  </li>
  );
}
