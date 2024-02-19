// == Nơi để show những component lên trên giao diện ==
import { Component } from "react";
import AdminLaptop from "./modules/admin-laptop/admin-laptop";
import FontSize from "./modules/buoi-9/font-size";
import ChangeColor from "./modules/buoi-9/change-color";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

/**
 * Cấu trúc component thì giống nhau
 * Nhưng về nội dung thì sẽ khác nhau tùy thuộc vào người sử dụng
 */
class House extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 20,
            backgroundColor: this.props.mai || "black",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: this.props.body || "blue",
          }}
        ></div>
      </div>
    );
  }
}

function App() {
  return <ChangeColor />;
}

export default App;
