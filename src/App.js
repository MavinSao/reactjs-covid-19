import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Globle from './components/Globle';
import News from './components/News';
import React, { Component } from 'react'
import axios from 'axios';

const base_url = 'https://covid-19-fastest-update.p.rapidapi.com/';

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  fetchCountries() {
    axios.get(`${base_url}summary`, { headers: { 'x-rapidapi-host': 'covid-19-fastest-update.p.rapidapi.com', 'x-rapidapi-key': 'ebfd2ea438msh1b285ac792ebf66p11ce05jsn1c7a432975e9' } }).then(res => {
      console.log(res);

    })
  }
  componentDidMount() {
    this.fetchCountries()
  }
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

