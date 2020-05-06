import React, { Component } from "react";
import Count from "./Count";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      search_country: ''
    }
  }
  handlerSearch = event => {
    this.setState({
      search_country: event.target.value
    })
  }
  render() {
    let { Country, CountryCode, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = this.props.country
    var date = new Date(this.props.country.Date);

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
                <button onClick={() => this.props.onSearch(this.state.search_country)} className="btn text-white"><i className="fas fa-search"></i></button>
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

