import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src="https://i.pravatar.cc/150?img=3" width={50}></img>
          </td>
          <td>
            <button onClick={()=> this.props.tangGiamSoLuong(sp.maSP,1)} className="btn btn-primary mr-2">+</button>
            <span>2</span>
            <button onClick={()=> this.props.tangGiamSoLuong(sp.maSP,-1)} className="btn btn-primary ml-2">-</button>
          </td>
          <td>{sp.soLuong}</td>
          <td>{sp.soLuong * sp.giaBan}</td>
          <td>
            <button onClick={()=>{ 
                this.props.xoaGioHang(sp.maSP)
            }} className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    let { gioHang } = this.props;
    return (
      <div>
        <div className="text-right">
          <span style={{ cursor: "pointer" }}>
            <i className="fa fa-shopping-cart mr-2">Giỏ hàng</i>
          </span>
        </div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tến sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>IPhone</td>
              <td>
                <img src="https://i.pravatar.cc/150?img=3" width={50}></img>
              </td>
              <td>
                <button className="btn btn-primary mr-2">+</button>
                <span>2</span>
                <button className="btn btn-primary ml-2">-</button>
              </td>
              <td>1000</td>
              <td>2000</td>
              <td>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr> */}
            {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    );
  }
}
