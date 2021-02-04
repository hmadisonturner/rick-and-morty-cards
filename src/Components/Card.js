import React from "react";

export default function Card(props) {
  return (
    <ul>
      <li> Name: {props.character.name} </li>
      <li> Status: {props.character.status} </li>
      <li> Species: {props.character.species} </li>
      <li> Type: {props.character.type} </li>
      <li> Origin: {props.character.origin.name} </li>
      <li> Location: {props.character.location.name} </li>
      <li>
        {" "}
        Episode: {props.character.episode.episode}{" "}
        {props.character.episode.name}{" "}
      </li>
    </ul>
  );
}
