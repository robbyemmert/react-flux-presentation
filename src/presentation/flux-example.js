import React from "react";

export default class FluxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentCount: 0};
  }

  componentDidMount() {
    this.countTimer = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.addToCount(1);
  }

  addToCount(amount) {
    this.setState({
      currentCount: this.state.currentCount + amount
    });
  }

  setCount(amount) {
    this.setState({
      currentCount: 0
    });
  }

  componentWillUnmount() {
    clearInterval(this.countTime);
  }

  render() {
    return(
      <div>
        <NumberRenderer number={this.state.currentCount} />
        <div><button type="button" onClick={() => {this.addToCount(1000);}}>Add 1000 to Count</button></div>
        <div><button type="button" onClick={() => {this.setCount(0);}}>Reset Count</button></div>
      </div>
    )
  }
}

const numberFormat = new Intl.NumberFormat();

const NumberRenderer = ({number}) => {
  return <div>{numberFormat.format(number)}</div>
}
