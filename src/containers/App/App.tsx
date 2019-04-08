import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/modules/reducer';
import * as user from '../../redux/modules/user';

export type TStateProps = { user: user.UserState };
export type TDispatchProps = typeof user.userActions;
export type TOwnProps = {};
export type TMergedProps = TStateProps & TDispatchProps & TOwnProps;

class App extends Component<TMergedProps, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState): TStateProps => {
  return {
    user: appState.user,
  }
}

const mapDispatchToProps: TDispatchProps = {
  ...user.userActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
