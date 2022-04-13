import './App.css';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/top bar/TopBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './components/pages/User List/UserList';
import User from './components/pages/user page/User';

function App() {
  return (

    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/users'>
            <UserList />
          </Route>

          <Route exact path='/users/:userId'>
            <User />
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
