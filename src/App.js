import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Globle from './components/Globle';
import News from './components/News';
import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path='/' component={Home} />
        <Route path='/globle' component={Globle} />
        <Route path='/news' component={News} />
      </BrowserRouter>
    );
  }
}

