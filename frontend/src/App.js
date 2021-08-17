import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Posts from './Posts';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact ><Home /></Route>
            <Route path="/about" exact ><About /></Route>
            <Route path="/dashboard" exact ><Dashboard /></Route>
            <Route path="/posts" exact ><Posts /></Route>
            <Route path="/*" exact ><NotFound /></Route>
            
          </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
