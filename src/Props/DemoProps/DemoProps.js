import React, { Component } from "react";
import CardProduct from "./CardProduct";

export default class DemoProps extends Component {
  product1 = {
    id: 1,
    name: "IPhone",
    price: 1000,
    img: "https://picsum.photo/200",
  };

  product2 = {
    id: 2,
    name: "Samsung",
    price: 1000,
    img: "https://picsum.photo/200",
  };
  render() {
    // this.props: là thuộc tính có sẵn của component để nhận giá trị từ component cha truyền vào (là component nào đang sử dụng thẻ này render)
    return (
      <div className="container">
        <div className="d-flex">
          <div className="w-25">
            <CardProduct
              product = {this.product1}
            />
          </div>

          <div className="w-25 ml-5">
            <CardProduct
              product = {this.product2}
            />
          </div>
        </div>
      </div>
    );
  }
}
