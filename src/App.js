import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-responsive-modal";

import "./App.css";
import carData from "./cars-data2.json";
import Expand from "./Expand";
import CustomSelectEditor from "./CustomSelectEditor";
import ControlBoard from "./ControlBoard";
import CustomDatePicker from "./CustomDatePicker";

class App extends Component {
  state = {
    columnDefs: this.addProp(carData.colDefs),
    rowData: carData.rowData,
    openModal: false,
    selectedData: "",
    pinColCount: this.countPinnedCols(carData.colDefs),
    frameworkComponents: { Expand, CustomSelectEditor, CustomDatePicker }
    // components: { datePicker: getDatePicker() }
  };
  // cellEditorParams

  addProp(arr) {
    const newItem = arr[0];
    newItem["cellRendererParams"] = {
      onClick: () => this.onButtonClick()
    };
    arr.shift();
    arr.unshift(newItem);

    const categoryCol = arr[4];
    categoryCol.cellEditorParams.onChange = v => this.setSelectedCategory(v);
    arr[4] = categoryCol;

    const dateCol = arr[7];
    dateCol.cellEditorParams.onChange = v => this.setSelectedDate(v);
    arr[7] = dateCol;

    return arr;
  }

  countPinnedCols(arr) {
    let numOfPins = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element.hasOwnProperty("pinned") && element.pinned === true) {
        numOfPins = i + 1;
      } else {
        break;
      }
    }
    return numOfPins;
  }

  addOnePinnedCol = () => {
    // state - 1 to get last pinned col, then + 1 to get next col
    const indexOfColToBePinned = this.state.pinColCount;
    const newColumnDefs = this.state.columnDefs;
    const tempObj = newColumnDefs[indexOfColToBePinned];
    tempObj.pinned = true;
    newColumnDefs[indexOfColToBePinned] = tempObj;
    this.setState({ columnDefs: newColumnDefs });
  };

  setSelectedCategory = value => {
    const selectedNode = this.gridApi.getSelectedNodes();
    console.log(value);
    console.log(selectedNode);
    selectedNode[0].setDataValue("category", value);
    console.log(this.state.rowData);
  };

  setSelectedDate = value => {
    const selectedNode = this.gridApi.getSelectedNodes();
    console.log(value);
    console.log(selectedNode);
    selectedNode[0].setDataValue("dateAdded", value);
    console.log(this.state.rowData);
  };

  onOpenModal = () => {
    console.log("openModal");
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  onButtonClick = e => {
    console.log(e);
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    console.log(selectedNodes);
    console.log(selectedData);
    this.setState({ selectedData: JSON.stringify(selectedData) });
    if (selectedData.length > 0) {
      this.onOpenModal();
    }
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + " " + node.model)
      .join(", ");
    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "1000px"
        }}
      >
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <p>{this.state.selectedData}</p>
          {/* <p>The row data will show here.</p> */}
        </Modal>
        {/* <button onClick={this.onButtonClick}>Get selected rows</button> */}
        <ControlBoard
          pinColCount={this.state.pinColCount}
          addOnePinnedCol={this.addOnePinnedCol}
        />
        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          enableSorting={true}
          enableFilter={true}
          rowSelection="multiple"
          rowDragManaged={true}
          rowHeight={40}
          // singleClickEdit={true}
          // components={this.state.components}
          frameworkComponents={this.state.frameworkComponents}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default App;
