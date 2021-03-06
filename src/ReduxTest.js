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
  state = {
    title: "FluxTest",
    rows: [],
    foo: "",
    getRowNodeId: function(data) {
      console.log(data);
      return data.id;
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.loadTestDataInView();
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    console.log("@@@@@!!!!!componentWillReceiveProps  RAN RAN");
    console.log(this.gridApi);
    if (this.gridApi) {
      console.log("here");
      this.gridApi.setRowData(nextProps.rowData);
    }
  }
  onCellValueChanged = e => {
    // console.log("onCellValueChanged RAN OK!!");
    // e.preventDefault();
    // console.log(e);
    updateTestData(this.props.rowData, e.data, e.rowIndex);
  };

  foo = e => {
    updateTestData(this.props.rowData, { id: 23, name: "finch", role: "qwerty" }, 2);
  };

  printProps = () => console.log(this.props);

  render() {
    // console.log(this.props);
    // console.log(colDefs);
    return (
      <React.Fragment>
        <h3>{this.state.title}</h3>
        <button onClick={this.printProps}>Print Props</button>
        <button onClick={this.foo}>Foo</button>
        <div
          className="ag-theme-balham"
          style={{
            height: "800px",
            width: "800px"
          }}>
          <AgGridReact
            onGridReady={params => {
              this.gridApi = params.api;
              this.gridApi.setRowData(this.props.rowData);
            }}
            // onGridReady={this.onGridReady}
            onCellValueChanged={this.onCellValueChanged}
            columnDefs={colDefs}
            deltaRowDataMode={true}
            getRowNodeId={this.state.getRowNodeId}
            // rowData={this.props.rowData}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
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
