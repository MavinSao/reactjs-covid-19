import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Globle from './components/Globle';
import News from './components/News';
import React, { Component } from 'react'
import axios from 'axios';

const base_url = 'https://covid-19-fastest-update.p.rapidapi.com/';

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      countries: [],
      global:{},
    }
  }
  fetchCountries() {
    axios.get(`${base_url}summary`, { headers: {'Access-Control-Allow-Origin': '*', 'x-rapidapi-host': 'covid-19-fastest-update.p.rapidapi.com', 'x-rapidapi-key': 'ebfd2ea438msh1b285ac792ebf66p11ce05jsn1c7a432975e9' } }).then(res => {
      this.setState({
        data: res.data,
        global:res.data.Global,
        countries: res.data.Countries,
      })
    })
  }


  componentWillMount() {
    this.fetchCountries()
  }
  
  render() {
    let cambodia = this.state.countries.filter(country=>country.CountryCode === 'KH')
    console.log(cambodia);
    
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path='/' component={()=><Home country={cambodia}/>}/>
        <Route path='/globle' component={Globle} />
        <Route path='/news' component={News} />
      </BrowserRouter>
    );
  }
}

