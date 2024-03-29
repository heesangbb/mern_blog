import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './store';
import Navbar from './containers/layout/Navbar';
import Landing from './components/layout/Landing';
import LoginPage from './containers/auth/LoginPage';
import SignUpPage from './containers/auth/SignUpPage';
import './App.css';
// import Alert from './containers/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './utils/PrivateRoute';
import BlogPage from './containers/blog/BlogPage';
import CreatePostPage from './containers/blog/CreatePostPage';
import ViewPostPage from './containers/blog/ViewPostPage';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    //window.location.href = './loginPage';
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="wrap">
          <div className="wrap-content">
            {/* <Alert /> */}
            <Switch>
              {/* home */}
              <Route path="/" exact component={Landing} />

              {/* login */}
              <Route path="/login" exact component={LoginPage} />
              <Route path="/signup" exact component={SignUpPage} />

              {/* blog */}
              <Route path="/blog" exact component={BlogPage} />
              <PrivateRoute path="/blog/post/new" exact component={CreatePostPage} />
              <PrivateRoute path="/blog/post/edit/:id" exact component={CreatePostPage} />
              <Route path="/blog/post/:id" exact component={ViewPostPage} />
              <Route path="/blog/:author" exact component={BlogPage} />

              {/*  */}
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
