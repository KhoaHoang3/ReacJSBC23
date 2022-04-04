import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
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

  state = {
    spChiTiet: {
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

    gioHang: [
      {
        maSP: 1,
        tenSP: "IPhone",
        hinhAnh: "https://i.pravatar.cc/150?img=3",
        giaBan: 1000,
        soLuong: 2,
      },
    ],
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    // 1 => nút + ; -1 => nút -
    console.log(maSPClick, soLuong);
    let gioHang = this.state.gioHang;
    let spGH = gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
          gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick);
        }
        // Nếu người dùng cancel => -- số lượng đó
        spGH.soLuong -= soLuong;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  xoaGioHang = (maSanPhamClick) => {
    console.log("maSanPhamClick", maSanPhamClick);
    let gioHang = this.state.gioHang;
    // tìm ra sản phẩm chứa mã click nút xóa
    let index = gioHang.findIndex((sp) => sp.maSP === maSanPhamClick);
    if (index !== -1) {
      // Hỏi người dùng trước khi thực hiện
      if (window.confirm("Bạn có muốn xóa sản phẩm đang chọn")) {
        gioHang.splice(index, 1);
      }
    }
    // Render lại giao diện cho giỏ hàng
    this.setState({
      gioHang: gioHang,
    });
  };

  themGioHang = (sanPhamClick) => {
    let sp = { ...sanPhamClick, soLuong: 1 };
    console.log("spClick", sanPhamClick);
    let gioHang = this.state.gioHang;
    // Check giỏ hàng đã có object sanpham đó chưa => nếu có tăng số lượng => chưa có push object vào gioHang
    let spGH = gioHang.find((sp) => sp.maSP === sanPhamClick.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHang.push(sp);
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  renderProduct = () => {
    return this.arrPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            themGioHang={this.themGioHang}
            phone={phone}
            xemChiTiet={this.xemChiTiet}
          />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log("SP CLICK", sanPhamClick);
    this.setState({
      spChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      giaBan,
      hinhAnh,
      heDieuHanh,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
    } = this.state.spChiTiet;
    return (
      <div className="container-fluid">
        <h3 className="mt-5">Giỏ hàng</h3>
        <GioHang
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <h3 className="text-center">Shop Điện Thoại</h3>
        <div className="row">
          {this.renderProduct()}
          {/* <div className="col-4">
            <div className="card">
              <img
                src="./img/img/applephone.jpg"
                className="w-full"
                
              ></img>
              <div className="card-body">
                <p>IPhone XS Max</p>
                <p>27.000.000</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <img
                src="./img/img/applephone.jpg"
                className="w-full"
                
              ></img>
              <div className="card-body">
                <p>IPhone XS Max</p>
                <p>27.000.000</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <img
                src="./img/img/applephone.jpg"
                className="w-100"
                
              ></img>
              <div className="card-body">
                <p>IPhone XS Max</p>
                <p>27.000.000</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Table */}
        <ChiTietSanPham spChiTiet={this.state.spChiTiet} />
      </div>
    );
  }
}
