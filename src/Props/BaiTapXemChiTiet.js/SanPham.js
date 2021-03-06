import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let{phone} = this.props
    return (
        
      <div className="card">
        <img src={phone.hinhAnh} className="w-full"></img>
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            onClick={() => this.props.xemChiTiet(phone)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>

          <button onClick={()=>{
            this.props.themGioHang(phone)
          }} className="btn btn-danger ml-2">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
