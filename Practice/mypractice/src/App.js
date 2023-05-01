import logo from './logo.svg';
import './App.css';
import { Useref } from './cpmponents/Useref';
import MyComponent from './cpmponents/UseState';
import Textt from './cpmponents/Text';
import Timer from './cpmponents/Timer';
import UserForm from './cpmponents/UserForm';
import Product from './cpmponents/Product';
import StopWatch from './cpmponents/StopWatch';

function App() {
  return (
      <div className="App">
          {/* <Useref /> */}
          {/* <MyComponent /> */}
          {/* <Textt /> */}
          {/* <Timer /> */}
          {/* <UserForm /> */}
      {/* <Product /> */}
      <StopWatch />
      </div>
  );
}

export default App;
