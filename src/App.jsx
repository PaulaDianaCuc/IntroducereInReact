import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeaderParameterized from './HeaderParameterized/HeaderParameterized';
import Header2 from './Header2';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderParameterized value="Test" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
