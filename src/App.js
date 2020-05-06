import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Globle from './components/Globle';
import News from './components/News';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
const base_url = 'https://covid-19-fastest-update.p.rapidapi.com/';


export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      countries: [],
      global: {
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
      },
      country: {
        Country: "",
        CountryCode: "",
        Date: "",
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        Slug: "",
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
      }
    }
  }
  fetchCountries() {
    let headers = {
      "access-control-allow-credentials": "true",
      "access-control-allow-origin": "*",
      'x-rapidapi-host': 'covid-19-fastest-update.p.rapidapi.com',
      'x-rapidapi-key': 'ebfd2ea438msh1b285ac792ebf66p11ce05jsn1c7a432975e9'
    };

    axios.get(`${base_url}summary`, { headers }).then(res => {
      this.setState({
        data: res.data,
        global: res.data.Global,
        countries: res.data.Countries,
        country: res.data.Countries.filter(country => country.Slug === 'cambodia')[0]
      })
    })
  }

  searchCountry = search_country => {
    let allCountry = this.state.countries;
    let searchCountry = search_country;
    this.setState({
      country: allCountry.filter(country => country.Slug === searchCountry)[0]
    })
  }

  componentWillMount() {
    this.fetchCountries()
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path='/' component={() => <Home country={this.state.country} onSearch={this.searchCountry} />} />
        <Route path='/globle' component={() => <Globle global={this.state.global} />} />
        <Route path='/news' component={News} />
      </BrowserRouter>
    );
  }
}

