import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCarsFromDB } from "./api";
import preload from "./my-grid-data.json";
import CarRow from "./CarRow";

class MyGrid extends Component {
  componentDidMount() {
    this.props.loadCarsInView();
  }

  render() {
    console.log(this.props);
    return (
      <div className="">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Origin</th>
              <th scope="col">Services</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.carsData.map(car => (
              <CarRow key={car.model} {...car} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const carsData = state.carsData ? state.carsData : "";
  console.log(carsData);
  return {
    carsData
  };
};

const mapDispatchToProps = dispatch => ({
  loadCarsInView() {
    dispatch(fetchAllCarsFromDB());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGrid);

// export default MyGrid;
