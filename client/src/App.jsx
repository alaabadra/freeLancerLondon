import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './style.css';
// import  'bootstrap/dist/css/bootstrap.min.css';

import {
  Header,
  Footer,
  Login,
  Signup,
  LandingPage,
  Home,
  PageNotFound,

} from './Components';
export default class  App extends React.Component {
  state = {
    isLogged: true,
    userInfo : null,
  };
  render(){

  const {isLogged} = this.state;
  return (
    
   <>
    <Router>
      <Header isLogged={isLogged}/>
      <Switch>
      <Route exact path = '/header' component={Header}/>
        <Route exact path = '/footer' component={Footer}/>
         <Route exact path = '/login' component={Login}/>
        <Route exact path = '/signup' component={Signup}/>
        <Route exact path = '/landing' component={LandingPage}/>
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/notfound'component={PageNotFound}/>
      </Switch>
      <Footer />
    </Router>
   </>
  );
}
}

