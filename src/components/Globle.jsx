import React, { Component } from "react";
import Count from "./Count";

export default class Globle extends Component {
  render() {
    console.log(this.props.global);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="App my-5">Coronavirus Global</h1>
          </div>
          <div className="col-md-12">
            <Count
              title="Total Comfirmed"
              total={this.props.global.TotalConfirmed}
            />
          </div>
          <div className="col-md-4">
            <Count title="New Deaths" total={this.props.global.NewDeaths} />
          </div>
          <div className="col-md-4">
            <Count
              title="New Recovered"
              total={this.props.global.NewRecovered}
            />
          </div>
          <div className="col-md-4">
            <Count
              title="New Confirmed"
              total={this.props.global.NewConfirmed}
            />
          </div>
          <div className="col-md-6">
            <Count title="Total Deaths" total={this.props.global.TotalDeaths} />
          </div>
          <div className="col-md-6">
            <Count
              title="Total Recovered"
              total={this.props.global.TotalRecovered}
            />
          </div>
        </div>
      </div>
    );
  }
}
