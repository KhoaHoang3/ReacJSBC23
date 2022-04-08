import React, { Component } from "react";

// Kết nội redux

import { connect } from "react-redux";

class TangGiamSoLuong extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <p>{this.props.number}</p>
        <button onClick={()=>{ 
          this.props.tangGiamSoLuong(1);
        }}>+</button>
        <button onClick={()=>{ 
          this.props.tangGiamSoLuong(-1);
        }}>-</button>
      </div>
    );
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  // State tổng của ứng dụng
  return {
    number: rootReducer.stateNumber,
  };
};

// Định nghĩa 1 hàm mapDispatchToProps => nhiệm vụ: tạo ra các props cho component là hàm
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong) => {
      // console.log(soLuong);
      // Để gửi dữ liệu lên redux (action)
      const action = { 
        type: 'TANG_GIAM_SO_LUONG', //redux bắt buộc phải có        
        soLuong: soLuong,
      }
      // Đưa dữ liệu lên redux
      dispatch(action);
    },
  };
};

// Cú pháp kết nối giữa react component và redux
export default connect(mapDispatchToProps,mapStateToProps)(TangGiamSoLuong);
