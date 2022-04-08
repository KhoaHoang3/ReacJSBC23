import React, { Component } from "react";
import SanPham from "../../Props/BaiTapXemChiTiet.js/SanPham";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";

export default class BaiTapGioHangRedux extends Component {
  arrPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/img/applephone.jpg",
    },
  ];
  render() {
    return (
      <div className="container">
        <h3 className="mt-2">Giỏ hàng</h3>
        <GioHangRedux />
        <h3 className="text-center">Danh Sách Sản phẩm</h3>
        <div className="row">
          {this.arrPhone.map((sp, index) => {
            return (
              <div className="col-4" key={index}>
                  {/* Đặt tên props là sanPham trong SanPhamReDux */}
                <SanPhamRedux sanPham={sp} /> 
              </div>
            );
          })}
          {/* DT-1 */}
          {/* <div className="col-4">
            <SanPhamRedux />
          </div> */}
          {/* DT-2 */}
          {/* <div className="col-4">
            <SanPhamRedux />
          </div> */}
          {/* DT-3 */}
          {/* <div className="col-4">
            <SanPhamRedux />
          </div> */}
        </div>
      </div>
    );
  }
}
