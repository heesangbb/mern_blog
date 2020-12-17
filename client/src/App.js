import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './containers/layout/Navbar';
import Landing from './components/layout/Landing';
import LoginPage from './containers/auth/LoginPage';
import SignUpPage from './containers/auth/SignUpPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrap">
        <div className="wrap-content">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
