import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { JobCard } from './components/JobCard';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Home />  
    </div>
  );
}

export default App;
