import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './style.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import {
  Header,
  Footer,
  Login,
  Signup,
  LandingPage,
  Home,
  pageNotFound,

} from './Components';
export default class  App extends React.Component() {
  state = {
    isLogged: true,
    userInfo : null,
  };
  render(){

  
  return (
   <>
    <Router>
      <Header />
      <Switch>
      <Route exact path = '/eader' component={Header}/>
        <Route exact path = '/footer' component={Footer}/>
         <Route exact path = '/login' component={Login}/>
        <Route exact path = '/signup' component={Signup}/>
        <Route exact path = '/' component={LandingPage}/>
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/notfound'component={pageNotFound}/>
      </Switch>
      <Footer />
    </Router>
   </>
  );
}
}

