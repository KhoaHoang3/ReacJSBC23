import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './BTLayout/BTLayout';
import BTContent from './BTLayout/BTSideBar';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {

  return (
    <div>
        {/* <DataBinding/> */}
        <HandleEvent/>
    </div>
  );
}

export default App;
