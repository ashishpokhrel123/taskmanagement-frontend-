import logo from './logo.svg';
import './App.css';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from './component/Board/Board';


function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path ='/home' component={ Board } />
        </Switch>
      </BrowserRouter>

   
  );
}

export default App;
