import React, { Component } from "react";

export default class HandleEvent extends Component {
  sayHello = (name) => {
    alert("Hello!!!" + name);
  };

  showMess = () => {
    alert("Hello Hello");
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.showMess}>Click Me!</button>
        <hr />
        <button onClick={this.sayHello.bind(this, "Tùng")}>Say Hello</button>
        <button onClick={() => this.sayHello('Khoa')}>Say Hello!!!</button>
      </div>
    );
  }
}

// function main(){ 
//     return function(){ 
//         alert(123);
//     };
// }

// let result = main();
// result();
