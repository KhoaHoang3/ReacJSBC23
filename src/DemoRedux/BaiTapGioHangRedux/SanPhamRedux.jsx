import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img height={350} src={sanPham.hinhAnh}></img>
        <div className="card-body">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button onClick={()=>this.props.themGioHang(sanPham)} className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = { ...sanPhamClick, soLuong: 1 };
      const action = {
        type: "THEM_GIO_HANG",
        spGH,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
