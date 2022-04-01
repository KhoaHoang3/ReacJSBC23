import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
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
      } = this.props.spChiTiet;
    return (
        <div className="row mt-5">
        <div className="col-4">
          <h4 className="text-center">{tenSP}</h4>
          <img className="w-100" src={hinhAnh}></img>
        </div>

        <div className="col-8">
          <h4>Thông số kỹ thuật</h4>
          <table className="table">
            <tbody>
              <tr>
                <th>Màn hình</th>
                <th>{manHinh}</th>
              </tr>

              <tr>
                <th>Hệ điều hành</th>
                <th>{heDieuHanh}</th>
              </tr>

              <tr>
                <th>Camera trước</th>
                <th>{cameraTruoc}</th>
              </tr>

              <tr>
                <th>Camera sau</th>
                <th>{cameraSau}</th>
              </tr>

              <tr>
                <th>Ram</th>
                <th>{ram}</th>
              </tr>

              <tr>
                <th>Rom</th>
                <th>{rom}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
