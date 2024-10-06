import './App.css';
import { ReactTyped } from 'react-typed';
import Navbar from "./components/Navbar"
import Login from "./components/Sign"

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      <Login/>
      </header>
    </div>
  );
}

export default App;
