
import './App.css';
import HomePage from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-up/sign-in-up.component';
import React from 'react';
import {auth} from '../src/firebase/firebase.utils';


class App extends React.Component {

  constructor ()
  {
    super();
    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth= null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount ()
  {
    this.unsubscribeFromAuth();
  }

  render ()
  {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
       <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop'   component={ShopPage}/>
         <Route path='/signin' component={SignInSignOutPage}/>
       </Switch>
      </div>
    );
  }

}

export default App;
