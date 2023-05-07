import logo from './logo.svg';
import './App.css';
import Product from './Component/Actions/Action';
import Page from './Component/View/View';
import Action from './Component/Actions/Action';

function App() {
  return (
      <div className="App">
          <Action />
          <Page />
      </div>
  );
}

export default App;
