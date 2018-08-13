import React, { Component } from "react";
import Select from "react-select";

const customStyles = {
  option: (base, state) => ({
    ...base,
    borderBottom: "1px dotted pink"
    // color: state.isFullscreen ? "red" : "blue",
    // padding: 20
  }),
  control: () => ({
    // none of react-selects styles are passed to <View />
    width: 200
  }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...base, opacity, transition };
  }
};

class CustomSelectEditor extends Component {
  state = {
    value: this.props.value
  };

  isPopup() {
    return true;
  }

  getValue() {
    return this.state.value;
  }

  handleChangeInSelect = value => {
    console.log(value);
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    console.log(this.props);
    return (
      <Select
        styles={customStyles}
        options={this.props.values}
        onChange={value => this.handleChangeInSelect(value.label)}
      />
    );
  }
}

export default CustomSelectEditor;
