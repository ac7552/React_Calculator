import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value_and_handler[0],
    };
  }

  render() {
    return (
      <button className="square" onClick={this.props.value_and_handler[1].bind(this,this.props.value_and_handler[0])}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
