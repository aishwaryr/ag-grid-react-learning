import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMsgFromDB } from "./api";
import { updateReduxStore } from "./util";
import MsgForm from "./MsgForm";

class Msg extends Component {
  state = { msg: "", initialMsg: "" };

  componentDidMount() {
    this.props.loadMsgInView();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.final);
    let msgFromProps = nextProps.final.toString();
    return nextProps.final === prevState.msg ? {} : { msg: msgFromProps };
  }

  update = option => {
    let newStr = "";
    if (option) {
      if (option === 1) {
        newStr = `${this.state.msg} Option 1`;
      }
      if (option === 2) {
        newStr = `${this.state.msg} Option 2`;
      }
      if (option === 3) {
        updateReduxStore(this.state.msg.toUpperCase());
        return;
      }
      if (option === 4) {
        updateReduxStore(this.state.msg.toLowerCase());
        return;
      }
    } else {
      this.setState({ msg: "" });
      this.props.loadMsgInView();
    }
    updateReduxStore(newStr);
  };

  render() {
    console.log(JSON.stringify(this.state.msg));
    if (!this.state.msg) {
      return <p>Please Wait...</p>;
    }

    return (
      <div className="search">
        {/* Check why this is toString is required here */}
        {/* <p>{modifyString(this.props.final.toString())}</p> */}
        <p>{this.state.msg}</p>
        <button onClick={() => this.update(1)}>1</button>
        <button onClick={() => this.update(2)}>2</button>
        <button onClick={() => this.update(3)}>Upper</button>
        <button onClick={() => this.update(4)}>Lower</button>
        <button onClick={() => this.update()}>Reset</button>
        <hr />
        <MsgForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(`state in Msg comp from redux ${JSON.stringify(state)}`);
  console.log(`state in Msg comp from redux ${state.msgData}`);
  console.log(typeof state.msgData);
  const msgData = state.msgData ? state.msgData : "";
  return {
    final: msgData
  };
};

const mapDispatchToProps = dispatch => ({
  loadMsgInView() {
    dispatch(fetchMsgFromDB());
  }
});

// export default Msg;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Msg);
