import React, { Component } from "react";
import Count from "./Count";

export default class Home extends Component {

  render() {
    let initCountry = {
      Country: "",
      CountryCode: "",
      Date: "",
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      Slug: "",
      TotalConfirmed: 0,
      TotalDeaths: 0,
      TotalRecovered: 0,
    }

    let data = this.props.country[0]
    let country =  data === undefined ? initCountry : data 
    var date = new Date(country.Date)
    

    return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
      <h1 className="App my-5">Covid 19 Outbreak in {country.Country} </h1>
          </div>
      <div className="col-md-12 App">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png" alt="cambodia flag" width="50%"/>
      </div>
     <div className="col-md-12 my-3 py-3 bg-light text-center" style={{fontSize:"2em"}}> {date.toDateString()}</div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="New Comfirm" total={country.NewConfirmed}/>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="New Death" total={country.NewDeaths}/>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="New Recovered" total={country.NewRecovered}/>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="Total Confirmed" total={country.TotalConfirmed}/>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="Total Deaths" total={country.TotalDeaths}/>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Count title="Total Recovered" total={country.TotalRecovered}/>
      </div>
      
      </div>
    </div>
    );
  }
}
