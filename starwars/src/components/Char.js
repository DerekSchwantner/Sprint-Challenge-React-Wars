import React from "react";

const Char = props => {
  //   console.log(props.char.url);
  return (
    <div className="card">
      <h2>{props.char.name}</h2>
      <hr className="line" />
      <ul className="info-list">
        <li>DOB: {props.char.birth_year}</li>
        <li>Height: {props.char.height}</li>
        <li>Eye Color: {props.char.eye_color}</li>
      </ul>
    </div>
  );
};

export default Char;
