import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { connect } from "react-redux";

import { fetchTestData, updateTestData } from "./util";

const colDefs = [
  { headerName: "Id", field: "id", editable: true },
  { headerName: "Name", field: "name", editable: true },
  { headerName: "Role", field: "role", editable: true }
];

class ReduxTest extends Component {
  state = { title: "FluxTest" };
  componentDidMount() {
    this.props.loadTestDataInView();
  }
  onCellValueChanged = e => {
    // e.preventDefault();
    console.log(e);
    updateTestData(this.props.rowData, e.data, e.rowIndex);
  };
  printProps = () => console.log(this.props);
  render() {
    console.log(this.props);
    // console.log(colDefs);
    return (
      <React.Fragment>
        <h3>{this.state.title}</h3>
        <button onClick={this.printProps}>Print Props</button>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "1000px"
          }}>
          <AgGridReact
            onGridReady={params => (this.gridApi = params.api)}
            onCellValueChanged={this.onCellValueChanged}
            // editType="fullRow"
            columnDefs={colDefs}
            rowData={this.props.rowData}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const rowData = state.testData ? state.testData : [];
  return { rowData };
};

const mapDispatchToProps = dispatch => ({
  loadTestDataInView() {
    dispatch(fetchTestData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest);

// export default ReduxTest;
