import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCarsFromDB } from "./api";
import { updateCarsDataInReduxStore, comparePrice } from "./util";
import CarRow from "./CarRow";
import FilterByMake from "./FilterByMake";

class MyGrid extends Component {
  componentDidMount() {
    this.props.loadCarsInView();
  }

  sortByPrice = () => {
    updateCarsDataInReduxStore(this.props.carsData.sort(comparePrice));
    console.log(this.state);
  };

  render() {
    const cars = this.props.carsData;
    if (cars.length === 0) {
      return <p>Please Wait...</p>;
    }
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
            {cars
              .filter(car => `${car.make} ${car.model}`.toLowerCase().indexOf(this.props.filterTerm) >= 0)
              .map(car => (
                <CarRow key={car._id} {...car} />
              ))}
          </tbody>
        </table>
        <button onClick={this.sortByPrice}>Sort by price</button>
        <FilterByMake />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const carsData = state.carsData ? state.carsData : [];
  const { filterTerm } = state;
  console.log(carsData);
  return {
    carsData,
    filterTerm
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
