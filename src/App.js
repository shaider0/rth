import logo from './logo.svg';
import './App.css';
import { Content } from './components/content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Content />
    </div>
  );
}

export default App;
