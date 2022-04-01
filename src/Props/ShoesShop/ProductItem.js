import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
      let {prod} = this.props;
    return (

      <div className="card">
        <img
          className="w-50"
          src={prod.image}
        ></img>
        <div className="card-body">
          <p>{prod.name}</p>
          <p>{prod.price}$</p>
          <button className="bg-dark text-white">Add to carts</button>
        </div>
      </div>
    );
  }
}
