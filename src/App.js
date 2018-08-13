import React, { Component } from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-responsive-modal";

import carData from "./cars-data.json";
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
    console.log(arr);

    const dateCol = arr[7];
    dateCol.cellEditorParams.onChange = v => this.setSelectedDate(v);
    arr[7] = dateCol;
    console.log(arr);

    return arr;
  }

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
        <ControlBoard />
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

// function getDatePicker() {
//   function Datepicker() {}
//   Datepicker.prototype.init = function(params) {
//     this.eInput = document.createElement("input");
//     this.eInput.value = params.value;
//     $(this.eInput).datepicker({ dateFormat: "dd/mm/yy" });
//   };
//   Datepicker.prototype.getGui = function() {
//     return this.eInput;
//   };
//   Datepicker.prototype.afterGuiAttached = function() {
//     this.eInput.focus();
//     this.eInput.select();
//   };
//   Datepicker.prototype.getValue = function() {
//     return this.eInput.value;
//   };
//   Datepicker.prototype.destroy = function() {};
//   Datepicker.prototype.isPopup = function() {
//     return false;
//   };
//   return Datepicker;
// }

export default App;
