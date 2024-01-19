import { Component } from "react";
import B from "./b";

/**
 * Cập nhật state trên redux
 * 1. connect Component + Redux
 * 2. mapDispatchToProps: phát 1 tín hiệu lên trên redux để cập nhật lại state của chúng ta.
 *
 * Chú ý: mapDispatchToProps phải là tham số thứ hai (2) của lần gọi hàm thứ nhất của connect.
 */

import { connect } from "react-redux";

// State React
class A extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  render() {
    return (
      <div
        style={{
          border: "2px dashed black",
        }}
      >
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });

            this.props.tangCount();
          }}
        >
          Click
        </button>

        <B count={this.state.count} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // truyền props vào component

  return {
    tangCount: () => {
      // Gửi tín hiệu lên redux
      // String, Number, Array
      // Object ???
      const action = {
        type: "tangCount", // Phân biệt được giữa các tín hiệu khác nhau.
        payload: 111,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(A);
