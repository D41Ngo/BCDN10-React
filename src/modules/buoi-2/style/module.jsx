import React, { Component } from "react";
// import default: thay đổi tên tùy ý, S, Style, St, Css ..
import S from "./index.module.css";

/**
 * S = {
 *  heading-2: _heading-2fajsdlfkjasdfjasdlfadsjlfk
 * }
 */

export function mergeClassName(...cn) {
  // cn: Array
  // cn = ['a', 'b', 'c'] => 'a b c'
  // join:
  return cn.join(" ");
}

/**
 * mergeClassName('a', 'b', 'c') => 'a b c'
 */

export default class ModuleStyle extends Component {
  render() {
    return (
      <div>
        <h2
          className={mergeClassName(S["heading-2"], S["container"], S["abc"])}
        >
          Cyber
        </h2>

        <h2 className="heading-2">Hihi</h2>
      </div>
    );
  }
}
