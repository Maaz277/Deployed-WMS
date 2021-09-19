import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import Graph from './Screens/Graph'
import Waste from './Screens/Waste'
import Depot from './Screens/Depot'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/Graph' component={Graph}/>
            <Route path = '/Waste' component={Waste}/>
            <Route path = '/Depot' component={Depot}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
