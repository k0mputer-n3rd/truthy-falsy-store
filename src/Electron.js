import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function Electron() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/" className="Link">
            Home
          </Link>
      </header>
    </div>
  );
}

export default Electron;
