import React, { Component } from 'react'

// Kết nội redux

import {connect} from 'react-redux';

class TangGiamSoLuong extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
      </div>
    )
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { 
    return{ 
        number: rootReducer.stateNumber
    }
}
export default connect(mapStateToProps)(TangGiamSoLuong);
