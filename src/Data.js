import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProductsFromDB } from "./api";

class Data extends Component {
  state = {};
  componentDidMount() {
    console.log("this.props.message");
    if (!this.props.products) {
      this.props.loadProducts();
    }
  }
  render() {
    console.log(this.props);

    if (!this.props.products) {
      return <p>Please Wait...</p>;
    }

    return (
      <div className="search">
        <pre>
          <code>{JSON.stringify(this.props.products[0], null, 2)}</code>
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const productsData = state.productsData ? state.productsData : {};
  return {
    ...productsData
  };
};

const mapDispatchToProps = dispatch => ({
  loadProducts() {
    console.log("called loadProducts");
    dispatch(fetchProductsFromDB());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
