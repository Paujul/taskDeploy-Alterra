import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Halo saya Paujul.</p>
        <a
          className="App-link"
          href="https://github.com/Paujul"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kunjungi GitHub saya
        </a>
      </header>
    </div>
  );
}

export default App;
