import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser /*, collectionsArray*/ } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (!userAuth) return setCurrentUser(userAuth);
    //   const userRef = createUserProfileDocument(userAuth);
    //   (await userRef).onSnapshot(snapshot => {
    //     setCurrentUser({
    //       id: snapshot.id,
    //       ...snapshot.data(),
    //     });
    //   });
    //   // addCollectionAndDocuments(
    //   //   'collections',
    //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //   // );
    // });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(App);
