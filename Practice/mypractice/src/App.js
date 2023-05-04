import logo from './logo.svg';
import './App.css';
import { Useref } from './cpmponents/Useref';
import MyComponent from './cpmponents/UseState';
import Textt from './cpmponents/Text';
import Timer from './cpmponents/Timer';
import UserForm from './cpmponents/UserForm';
import Product from './cpmponents/Product';
import StopWatch from './cpmponents/StopWatch';
import Background from './cpmponents/Callback';
import Todo from './cpmponents/Memo';
import AppMemo from './cpmponents/Memo';
import { UseCall } from './cpmponents/UseCall';
import RandomNumberGenerator from './cpmponents/Random';
import Genrator from './cpmponents/Random';

function App() {
  return (
      <div className="App">
          {/* <Useref /> */}
          {/* <MyComponent /> */}
          {/* <Textt /> */}
          {/* <Timer /> */}
          {/* <UserForm /> */}
          {/* <Product /> */}
          {/* <StopWatch /> */}
          {/* <Background /> */}
          {/* <Todo /> */}
      {/* <AppMemo/> */}
      {/* <RandomNumberGenerator />
       */}
      {/* <UseCall /> */}
      <Genrator />

      </div>
  );
}

export default App;
