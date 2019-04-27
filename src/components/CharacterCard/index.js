import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <img 
          alt={props.name} 
          src={props.image} 
          id={props.id} 
          onClick={() => props.onClick(props.name)}/>
    );
}

export default CharacterCard;
