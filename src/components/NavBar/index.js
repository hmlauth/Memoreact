import React from "react";
import "./style.css";

// props 
class NavBar extends React.Component {

  displayMessage = () => {
    const currentArrLength = this.props.arrLength;
    if (this.props.score === 0 && this.props.topScore === 0) {
      return "Click an image to being!"
    } else if (this.props.score > 0) {
      return "You guessed correctly!"
    } else if (this.props.score === 0 && currentArrLength ===0 ){
      return "You guessed incorrectly!"
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">MemorEact</a>

          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <a className="message">
                {this.displayMessage(this.props)}
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link">Score: {this.props.score}</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">Top Score: {this.props.topScore}</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;

