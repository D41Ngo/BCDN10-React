import { Component } from "react";

export default class Footer extends Component {
  render() {
    console.log(this.props);

    return <div>{this.props.name}</div>;
  }
}
