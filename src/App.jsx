/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';

import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If the user is logged in, store the user info in the state
      // else change the state to null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
              {
                id: snapShot.id,
                ...snapShot.data(),
              },
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      // send the current user to the nav bar
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() =>
          this.props.currentUser ? (<Redirect to='/'/>) : (<Auth/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

// gives this class access to a function called setCurrentUser
// that takes a user object and then creates a dispatch that notifies
// all the reducers with the action setCurrentUser and the appropriate
// reducer takes care of the action
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
