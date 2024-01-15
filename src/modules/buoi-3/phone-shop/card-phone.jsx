import React, { Component } from "react";

export default class CardPhone extends Component {
  render() {
    const { product, handleXemChiTiet } = this.props;

    return (
      <div key={product.maSP} className="card" style={{ width: "22rem" }}>
        <img src={product.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <p>{product.giaBan}</p>
          <div className="d-flex gap-2">
            <button
              onClick={() => {
                handleXemChiTiet(product);
              }}
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
            <button
              onClick={() => {
                this.props.handleThemGioHang(product);
              }}
              className="btn btn-primary"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
