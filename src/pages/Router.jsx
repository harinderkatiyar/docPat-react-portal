import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Login from './LoginSignUp';
import RegistrationPaitent from './paitent/Registration';
import RegistrationDoc from './doc/Registration';
import LoginPaitent from './paitent/Login';
import LoginDoc from './doc/Login';
import forgotPaitent from './paitent/FogotPassword';
import forgotDoc from './doc/FogotPassword';
import profileDoc from './doc/profile';
import profilePaitent from './paitent/profile';
import changePasswordPaitent from './paitent/ChangePassword';
import changePasswordDoc from './paitent/ChangePassword';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import '../../node_modules/toasted-notes/src/styles.css'; 
import Navbar from '../layout/NavBar';
import Footer from './Footer'
class App extends Component  {
  render(){
  return(<>
  <BrowserRouter>
  <Navbar />
  <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About}/>
      <Route path='/service' exact component={Service}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/login-signup' exact component={Login}/>
      <Route path='/registration-paitent' exact component={RegistrationPaitent}/>
      <Route path='/registration-doc' exact component={RegistrationDoc}/>
      <Route path='/login-paitent' exact component={LoginPaitent}/>
      <Route path='/login-doc' exact component={LoginDoc}/>
      <Route path='/forgot-paitent' exact component={forgotPaitent}/>
      <Route path='/forgot-doc' exact component={forgotDoc}/>
      <Route path='/profile-paitent' exact component={profilePaitent}/>
      <Route path='/profile-doc' exact component={profileDoc}/>
      <Route path='/change-password-paitent' exact component={changePasswordPaitent}/>
      <Route path='/change-password-doc' exact component={changePasswordDoc}/>
      <Redirect to="/"></Redirect>
  </Switch>
  <Footer/>
  </BrowserRouter>
    </>)
}}

export default App;
 