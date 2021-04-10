
import './App.css';
import HomePage from './pages/homepage/homepage'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-up/sign-in-up.component';



function App() {
  return (
    <div>
    <Header/>
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/shop'   component={ShopPage}/>
       <Route path='/signin' component={SignInSignOutPage}/>
     </Switch>
    </div>
  );
}

export default App;
