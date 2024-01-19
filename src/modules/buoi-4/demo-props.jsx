import { Component } from "react";
import C from "./c";
import A from "./a";

/**
 * Trong React không có đường tắt để truyền từ component này xuống component kia nhanh nhất có thể nếu như bị lồng nhiều cấp với nhau.
 * Chúng ta chỉ có thể truyền từng cấp một.
 *
 * -> Redux. (Thư viện bên ngoài)
 * -> Sau này thì react có ra đừng ContextApi để có thể truyền không cần thông qua các component trung gian. (React)
 */

export default class DemoProps extends Component {
  render() {
    return (
      <>
        <A />
        <A />
        <A />
      </>
    );
  }
}
