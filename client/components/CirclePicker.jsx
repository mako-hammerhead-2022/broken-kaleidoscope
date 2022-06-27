import React from 'react';
import {CirclePicker } from 'react-color';

const Pallete = () => {
class Component extends React.Component {
  state = {
    background: '#332036',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <CirclePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}
}
export default Pallete