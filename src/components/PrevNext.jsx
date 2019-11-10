import React, { Component } from "react";

class PrevNext extends Component {
  state = {
    hideNext: false,
    hidePrev: true
  };

  handleNext = () => {
    let currpos = this.props.currentPosition;
    if (currpos * 3 < this.props.listLength) {
      currpos++;
    }

    if (currpos === 1) {
      this.setState({ hidePrev: true });
    } else {
      this.setState({ hidePrev: false });
    }

    if (currpos * 3 >= this.props.listLength) {
      this.setState({ hideNext: true });
    } else {
      this.setState({ hideNext: false });
    }

    this.props.OnPrevNext(currpos);
  };

  handlePrev = () => {
    let currpos = this.props.currentPosition;

    if (currpos > 1) {
      currpos--;
      //this.setState({ currentPosition: currpos });
    }

    if (currpos === 1) {
      this.setState({ hidePrev: true });
    } else {
      this.setState({ hidePrev: false });
    }

    if (currpos * 3 >= this.props.listLength) {
      this.setState({ hideNext: true });
    } else {
      this.setState({ hideNext: false });
    }

    this.props.OnPrevNext(currpos);
  };

  render() {
    return (
      <p className="left" style={{ width: "230px" }}>
        <button
          className={
            this.state.hidePrev
              ? "ui left labeled icon button"
              : "ui left labeled icon button primary"
          }
          onClick={this.handlePrev}
        >
          <i className="left arrow icon"></i>
          Prev
        </button>
        <button
          className={
            this.state.hideNext
              ? "ui right labeled icon button"
              : "ui right labeled icon button primary"
          }
          onClick={this.handleNext}
        >
          <i className="right arrow icon"></i>
          Next
        </button>
      </p>
    );
  }
}

export default PrevNext;
