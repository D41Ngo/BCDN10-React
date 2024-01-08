import React, { Component } from "react";

export default class ChangeColor extends Component {
  // 3 bước.
  constructor() {
    super();

    this.state = {
      bgc: "green",
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: this.state.bgc,
          }}
        />

        <div className="my-2">
          <button
            onClick={() => {
              this.setState({
                bgc: "black",
              });
            }}
            className="btn btn-dark mx-2"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.setState({
                bgc: "yellow",
              });
            }}
            className="btn btn-warning mx-2"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              this.setState({
                bgc: "blue",
              });
            }}
            className="btn btn-primary mx-2"
          >
            Blue
          </button>
          <button
            onClick={() => {
              this.setState({
                bgc: "green",
              });
            }}
            className="btn btn-success mx-2"
          >
            Green
          </button>
        </div>
      </div>
    );
  }
}
