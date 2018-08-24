import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCarsFromDB } from "./api";
import { updateCarsDataInReduxStore, comparePrice } from "./util";
import CarRow from "./CarRow";

class MyGrid extends Component {
  // state = {
  //   cars: this.props.carsData
  // };
  componentDidMount() {
    this.props.loadCarsInView();
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps);
  //   let newCars = nextProps.carsData;
  //   return { cars: newCars };
  //   // return nextProps.carsData === prevState.cars ? {} : { cars: newCars };
  // }
  sortByPrice = () => {
    updateCarsDataInReduxStore(this.props.carsData.sort(comparePrice));
    console.log(this.state);
  };

  render() {
    const cars = this.props.carsData;
    if (cars.length === 0) {
      return <p>Please Wait...</p>;
    }
    // console.log(this.props);
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
            {cars.map(car => (
              <CarRow key={car.model} {...car} />
            ))}
          </tbody>
        </table>
        <button onClick={this.sortByPrice}>Sort</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const carsData = state.carsData ? state.carsData : [];
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
