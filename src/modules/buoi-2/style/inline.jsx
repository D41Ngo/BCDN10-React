import React, { Component } from "react";

export default class InlineStyle extends Component {
  render() {
    // bgc: xanh
    // color: white
    // fz: 30px
    // padding: 50px
    // margin-top: 5rem
    // HTML: <div style={"background-color:green; color:white; font-size: 30px"}>InlineStyle</div>

    /**
     * Sự khác biệt giữa react vs html
     * react: object
     * html: string
     */
    return (
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "30px",
          padding: 50, // gắn cho đơn vị mặc định là px
          marginTop: "5rem",
        }}
      >
        InlineStyle
      </div>
    );
  }
}
