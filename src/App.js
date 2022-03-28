import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './BTLayout/BTLayout';
import BTContent from './BTLayout/BTSideBar';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import StyleComponent from './StyleComponent/StyleComponent';
import TangGiamFontSize from './StateDemo/TangGiamFontSize';
import ThayDoiMauSac from './StateDemo/ThayDoiMauSac';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderArray from './RenderArray/RenderArray';

function App() {

  return (
    <div>
        {/* <DataBinding/> */}
        {/* <StyleComponent/> */}
        <StateDemo/>
        <hr></hr>
        <TangGiamFontSize/>
        <hr></hr>
        <ThayDoiMauSac/>
        <hr></hr>
        <BaiTapChonXe/>
        <hr></hr>
        <RenderArray/>
    </div>
  );
}

export default App;
