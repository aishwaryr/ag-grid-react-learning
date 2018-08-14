import React, { Component } from "react";

import PinnedColsCounter from "./PinnedColsCounter";

class ControlBoard extends Component {
  // state = {};
  render() {
    return (
      <div className="control-board">
        <div className="inline control-board-items">
          <PinnedColsCounter
            pinColCount={this.props.pinColCount}
            addOnePinnedCol={this.props.addOnePinnedCol}
          />
        </div>
        <div className="inline">
          <button>dfdf</button>
        </div>
      </div>
    );
  }
}

export default ControlBoard;
