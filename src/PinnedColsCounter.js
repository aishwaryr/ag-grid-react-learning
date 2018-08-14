import React, { Component } from "react";

class PinnedColsCounter extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <button type="button">-</button>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn-xs btn-secondary disabled"
            disabled
          >
            {this.props.pinColCount}
          </button>
        </div>
        <button type="button" onClick={this.props.addOnePinnedCol}>
          +
        </button>
      </React.Fragment>
    );
  }
}

export default PinnedColsCounter;
