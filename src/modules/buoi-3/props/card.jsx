import React, { Component } from "react";

export default class Card extends Component {
  renderButton = () => {
    const { contentBtn } = this.props;
    if (this.props.showButton) {
      return (
        <a href="#" className="btn btn-primary">
          {contentBtn}
        </a>
      );
    }

    return null;
  };

  render() {
    const { img, contentBtn } = this.props;
    // const img = this.props.img
    console.log(this.props);

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* Khi prop showButton = true thì mới hiển thị button này. */}
          {/* render với điều kiện */}
          {this.props.showButton ? (
            <a href="#" className="btn btn-primary">
              {contentBtn}
            </a>
          ) : null}

          {/* {this.renderButton()} */}

          {/* {this.props.showButton && (
            <a href="#" className="btn btn-primary">
              {contentBtn}
            </a>
          )} */}
        </div>
      </div>
    );
  }
}
