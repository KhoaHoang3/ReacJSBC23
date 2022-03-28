import React, { Component } from "react";

export default class ThayDoiMauSac extends Component {
  state = {
    colorHome: "green",
  };

  handleChangeColor = (newColor) => { 
      this.setState({ 
          colorHome:newColor
      })
  }
  render() {
    return (
      <div className="container">
        <h3>Thay đổi màu sắc ngôi nhà</h3>
        <i className="fa fa-home" style={{ fontSize: 150,color:this.state.colorHome }}></i>
        <br></br>
        <button onClick={()=>{ this.handleChangeColor('green')}} className="btn btn-success">Green</button>
        <button
            onClick={()=>{this.handleChangeColor('blue')}}
          style={{ backgroundColor: "blue" }}
          className="btn btn-success ml-2"
        >
          Blue
        </button>
        <button
        onClick={()=>{ this.handleChangeColor('red')}}
          style={{ backgroundColor: "red" }}
          className="btn btn-success ml-2"
        >
          Red
        </button>
      </div>
    );
  }
}
