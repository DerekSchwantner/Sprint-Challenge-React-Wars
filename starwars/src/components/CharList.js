import React from "react";
import Char from "./Char";

class CharList extends React.Component {
  render() {
    console.log(this.props.chars);
    return (
      <div className="card-list">
        {this.props.chars.map(char => (
          <Char key={char.name} char={char} />
        ))}
      </div>
    );
  }
}

export default CharList;
