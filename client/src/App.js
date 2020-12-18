import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './containers/layout/Navbar';
import Landing from './components/layout/Landing';
import LoginPage from './containers/auth/LoginPage';
import SignUpPage from './containers/auth/SignUpPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
