import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = { 
        imgSrc: './img/red-car.jpg',
    }

    handleColorCar = (color) => { 
        this.setState({ 
            imgSrc:`./img/${color}-car.jpg`
        })
    }

  render() {
    return (
      <div className='container'>
          <h3>Bài tậpp chọn xe</h3>
          <div className='row'>
              <div className='col-12'>
                  <img className='w-100 mb-5' src={this.state.imgSrc}></img>
                  <button onClick={()=>{ 
                      this.handleColorCar('black')
                  }} className='btn text-white mr-4' style={{backgroundColor:'black'}}>Black</button>
                  <button onClick={()=>{ this.handleColorCar('red')}} className='btn text-white mr-4' style={{backgroundColor:'red'}} >Red</button>
                  <button onClick={()=>{this.handleColorCar('silver')}} className='btn text-dark mr-4' style={{backgroundColor:'silver'}}>Silver</button>
                  <button onClick={()=>{this.handleColorCar('steel')}} className='btn text-dark' style={{backgroundColor:'steel'}}>Steel</button>

              </div>
          </div>
      </div>
    )
  }
}
