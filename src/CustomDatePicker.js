import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class CustomDatePicker extends Component {
  state = {
    startDate: moment(),
    selectedDate: ""
  };

  isPopup() {
    return true;
  }

  getValue() {
    return this.state.selectedDate;
  }

  handleChange = date => {
    console.log(this.state.startDate);
    let formattedDate = date._d.toString().slice(4, 15);
    this.setState({ selectedDate: formattedDate });
    this.props.onChange(this.state.selectedDate);
  };

  render() {
    console.log(this.props);
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default CustomDatePicker;
