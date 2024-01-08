import React, { Component } from "react";

export default class RandomImage extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://i.pravatar.cc/?img=3",
    };
  }
  render() {
    // 0 * 9 < Math.random() * 9 < 1 * 9
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.state.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                // 1 -> 50;
                const num = Math.floor(Math.random() * 50) + 1;

                this.setState({
                  url: `https://i.pravatar.cc/?img=${num}`,
                });
              }}
              className="btn btn-primary"
            >
              Random
            </button>
          </div>
        </div>
      </div>
    );
  }
}
