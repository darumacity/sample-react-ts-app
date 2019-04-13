import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../redux/modules/reducer';
import * as user from '../../redux/modules/user';

export type TOwnProps = {};
export type TMergedProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & TOwnProps;

class App extends Component<TMergedProps, any> {
  render() {
    return (
      <div className="App">
        {this.props.user.count}
        <button onClick={() => { this.props.updateCount({ count: ++this.props.user.count }) }}>increment</button>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState) => { return { user: appState.user, } }

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateCount: user.userActions.updateCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
