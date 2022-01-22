import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className="m-3 d-flex justify-context-centre">
         React JS Tutorial
      </h3>
       <Navigation/>
       <switch>
         <Route path='/' component={Home} exact/>
         <Route path='/department' component={Department} exact/>
         <Route path='/employee' component={Employee} exact/>
       </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
