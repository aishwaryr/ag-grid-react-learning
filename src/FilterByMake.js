import React from "react";
import { connect } from "react-redux";
import { setFilterTerm } from "./actionCreators";

const FilterByMake = props => (
  <div>
    <label htmlFor="filterByMake">Filter by make:</label>
    <input type="text" id="filterByMake" value={props.filterTerm} onChange={e => props.handleFilterTerm(e)} />
  </div>
);

const mapStateToProps = state => ({ filterTerm: state.filterTerm });
const mapDispatchToProps = dispatch => ({
  handleFilterTerm(e) {
    dispatch(setFilterTerm(e.target.value.toLowerCase()));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByMake);
