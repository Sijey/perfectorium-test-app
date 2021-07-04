import logo from './logo.svg';
import './App.css';
import Deposits from "./components/Deposits";
import Header from "./components/Header";
import SideBlock from "./components/SideBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap">
        <SideBlock />
        <Deposits />
      </div>
    </div>
  );
}

export default App;
