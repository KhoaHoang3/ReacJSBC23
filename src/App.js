import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './BTLayout/BTLayout';
import BTContent from './BTLayout/BTSideBar';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet.js/BaiTapXemChiTiet';

function App() {

  return (
    <div>
        {/* <DataBinding/> */}
        {/* <HandleEvent/> */}
        {/* <DemoProps/> */}
        {/* <ShoesShop/> */}
        <BaiTapXemChiTiet/>
    </div>
  );
}

export default App;
