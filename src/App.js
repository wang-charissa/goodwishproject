
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Headers from './nav/Header';
import About from './components/About';
import Missions from './components/Missions';
import Volunteers from './components/Volunteers';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/who-we-are">
              <About />
            </Route>
            <Route path="/what-we-do">
              <Missions />
            </Route>
            <Route path="/volunteers">
              <Volunteers />
            </Route>
            <Route path="/programs">
              <Events />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
