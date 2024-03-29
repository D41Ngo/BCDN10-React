import React, { Component } from "react";

export default class XemChiTiet extends Component {
  constructor() {
    console.log("[XemChiTiet] constructor");
    super();
    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("[XemChiTiet] getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("[XemChiTiet] componentDidMount");
  }

  render() {
    console.log("[XemChiTiet] render");

    const product = this.props.product;
    return (
      <div className="row">
        <div className="col-4">
          <h2 className="text-center">{product.tenSP}</h2>
          <img src={product.hinhAnh} style={{ width: "100%" }} />
        </div>

        <div className="col-8">
          <h2 className="text-center">Thông số kĩ thuật</h2>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td style={{ width: 200 }}>Màn hình</td>
                <td>{product.manHinh}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Hệ điều hành</td>
                <td>{product.heDieuHanh}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Camera Trước</td>
                <td>{product.cameraTruoc}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Camera Sau</td>
                <td>{product.cameraSau}</td>
              </tr>

              <tr>
                <td style={{ width: 200 }}>Ram</td>
                <td>{product.ram}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Rom</td>
                <td>{product.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
