import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';
import { checkUser } from './../util/session_utils.js';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._isSignedIn = this._isSignedIn.bind(this);
  }

  _isSignedIn() {
    checkUser((resp) => {
      console.log(resp);
    }, (resp) => {
      console.log(resp);
    });
  }


  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={ this._isSignedIn }>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};


export default AppRouter;
