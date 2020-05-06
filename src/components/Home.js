import React, { Component } from "react";
import Count from "./Count";
import axios from 'axios';
import { Button } from 'react-bootstrap';
const base_url = 'https://covid-19-fastest-update.p.rapidapi.com/';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      countries: [],
      global: {},
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
      },
      search_country: ''
    }
  }
  fetchCountries() {
    axios.get(`${base_url}summary`, { headers: { 'Access-Control-Allow-Origin': '*', 'x-rapidapi-host': 'covid-19-fastest-update.p.rapidapi.com', 'x-rapidapi-key': 'ebfd2ea438msh1b285ac792ebf66p11ce05jsn1c7a432975e9' } }).then(res => {
      this.setState({
        data: res.data,
        global: res.data.Global,
        countries: res.data.Countries,
        country: res.data.Countries.filter(country => country.Slug === 'cambodia')[0]
      })
    })
  }

  handlerSearch = event => {
    this.setState({
      search_country: event.target.value
    })
  }

  searchCountry = () => {
    console.log('work');
    let allCountry = this.state.countries;
    let searchCountry = this.state.search_country;
    this.setState({
      country: allCountry.filter(country => country.Slug === searchCountry)[0]
    })
  }

  componentWillMount() {
    this.fetchCountries()
  }

  render() {

    let { Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = this.state.country
    var date = new Date(this.state.country.Date);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="App my-5">{Country} Coronavirus</h1>
          </div>
          <div className="col-md-12 App">
            <img src={`https://www.countryflags.io/${CountryCode}/flat/64.png`} alt="country flag" width="15%" />
          </div>
          <div className="col-md-12 my-3 py-2" style={{ fontSize: "1.5em" }}>
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input text-center"
                  type="text"
                  name="search"
                  placeholder="Search Country..."
                  onChange={this.handlerSearch} />
                <button onClick={this.searchCountry} className="btn text-white"><i className="fas fa-search"></i></button>
              </div>
            </div>

          </div>
          <div className="col-md-12 my-3 py-2 bg-light text-center" style={{ fontSize: "2em" }}> {date.toDateString()}</div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="New Comfirm" total={NewConfirmed} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="New Death" total={NewDeaths} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="New Recovered" total={NewRecovered} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="Total Confirmed" total={TotalConfirmed} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="Total Deaths" total={TotalDeaths} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Count title="Total Recovered" total={TotalRecovered} />
          </div>

        </div>
      </div>
    );
  }
}
