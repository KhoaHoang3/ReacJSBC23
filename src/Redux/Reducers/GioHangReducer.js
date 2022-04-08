const sateDefault = [
  {
    maSP: 1,
    tenSP: "IPhone",
    hinhAnh: "./img/img/vsphone.jpg",
    giaBan: 1000,
    soLuong: 1,
  },
];

export const gioHangReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;

      let sp = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
        console.log("gioHang", gioHang);
      }

      // Immutable : tính bất biến
      // Đối với state là object hoặc array phải clone ra object array mới
      return [...gioHang];
    }

    case "XOA_GIO_HANG": {
      let gioHang = [...state];
      gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPClick);
      return gioHang;
    }
    default:
      return state;
  }
};
