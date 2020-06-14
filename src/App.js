import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';

/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className={styles.App}>
        <img alt="App-logo" className={styles.AppLogo} src={logo} />
        <Switch>
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: () => {
      dispatch(initializeApp());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

