import logo from './logo.svg';
import './App.css';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from './component/Board/Board';
import PrivateRoute from './utils/PrivateRoute';
import EditTask from './component/Task/EditTask';


function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path ='/home' component={ Board } />
          <PrivateRoute path ='/edittask/:id' component={ EditTask } />
        </Switch>
      </BrowserRouter>

   
  );
}

export default App;
