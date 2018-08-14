import React from "react";

const iconStyle = {
  cursor: "pointer"
};

const Expand = props => (
  <div className="expand-btn-div">
    <i style={iconStyle} onClick={props.onClick} className="fas fa-plus" />
  </div>
);

export default Expand;
