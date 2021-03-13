import React from "react";
import { DataContext } from "../context/DataContext";
import SecureAxios from "../config/SecureAxios";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({ userInput: event.target.value });
  }

  handleClick() {
    SecureAxios({
      method: "post",
      url: "/users",
      data: { name: this.state.userInput },
    })
      .then((res) => {
        console.log(res.data);
        alert("Data has been posted Successfully!!!");
      })
      .catch((error) => console.log("Error"));
  }

  render() {
    return (
      <div className="main">
        <h1>Digikull Students</h1>
        <div className="basic">
          <h2>Hello User</h2>
          <input
            style={{ margin: "1%" }}
            value={this.state.userInput}
            onChange={this.handleInput}
            type="text"
          />
          <button onClick={this.handleClick}>ADD</button>
        </div>
        {this.context.users.map((item) => {
          return (
            <div className="container">
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

Users.contextType = DataContext;
