import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AppMovies from './containers/AppMovies';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
