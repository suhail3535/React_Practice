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
import { Child1, Child2, Parent } from './cpmponents/Prop';
import Set from './cpmponents/Set';

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
      {/* <Genrator />
      < */}
      <Parent />
      <Child1 />
      <Child2 />
{/* <Set /> */}
      </div>
  );
}

export default App;
