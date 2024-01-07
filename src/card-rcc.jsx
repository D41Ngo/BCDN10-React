// Tạo class component
// Gõ nhanh: rcc
import { Component } from "react";

// JS + HTML: jsx
// Code html trong file js.
export default class CardRCC extends Component {
  // Sử dụng method render để show nội dung lên trên giao diện. Đặt trong kết quả trả về của method render
  render() {
    // Babel: html -> createElement
    // return createElement("div", { className: "card" }, "Card RCB");
    return <div className="card">Card RCB</div>;
  }
}
