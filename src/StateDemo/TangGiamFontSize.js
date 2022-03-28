import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

    state ={ 
        fSize: 15 // State fontsize là number
    }

    changeFontSize = (newFSize) => { 
        this.setState({ 
            fSize : this.state.fSize + newFSize
        })
    }
  render() {
    return (
      <div className='container'>
          <h3>Bài tập tăng giảm font size</h3>
          <p style={{fontSize:`${this.state.fSize}px`}}>Học Lập trình tại cyber thật cool</p>
          <button onClick={()=>{this.changeFontSize(5)}} className='btn btn-primary'>+</button>
          
          
          <button onClick={()=>{this.changeFontSize(-5)}} className='btn btn-primary ml-2'>-</button>

      </div>
    )
  }
}

