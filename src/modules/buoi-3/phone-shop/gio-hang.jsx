import React, { PureComponent, Component } from "react";
/**
 * PureComponent: So sánh giá trị props lần render trước đó và hiện tại có thay đổi hay không?
 * - Có thì sẽ re-render component.
 * - Không thì sẽ không re-render.
 *
 * Đánh đổi:
 * - Tốn tài thêm tài nguyên của ứng dụng để lưu lại các giá trị của props.
 */
export default class GioHang extends PureComponent {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Giá Bán</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((p) => {
            return (
              <tr key={p.maSP}>
                <td style={{ width: 200 }}>{p.maSP}</td>
                <td style={{ width: 200 }}>{p.tenSP}</td>
                <td style={{ width: 200 }}>{p.giaBan}</td>
                <td style={{ width: 200 }}>
                  <button
                    onClick={() => {
                      this.props.handleTangSoLuong(p.maSP);
                    }}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  <span>{p.soLuong}</span>
                  <button
                    onClick={() => {
                      this.props.handleGiamSoLuong(p.maSP);
                    }}
                    className="btn btn-success"
                  >
                    -
                  </button>
                </td>
                <td style={{ width: 200 }}>{p.giaBan * p.soLuong}</td>
                <td style={{ width: 200 }}>
                  <button
                    onClick={() => {
                      this.props.handleXoaSp(p);
                    }}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
