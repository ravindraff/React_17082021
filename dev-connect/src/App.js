
import './App.css';
import Landing from './layout/Landing';
import Login from './layout/Login';
import Navbar from './layout/Navbar';
import Register from './layout/Register';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Posts from './layout/Posts';
import Movies from './layout/Movies';
import Calculator from './layout/Calculator';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/claculator" exact component={Calculator} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;