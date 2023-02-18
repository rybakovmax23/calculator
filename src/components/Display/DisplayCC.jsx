import React from 'react';
import { DisplayInput } from './styled';
import { connect } from 'react-redux';

class DisplayCC extends React.Component {
  render() {
    const { firstValue, secondValue, result } = this.props;
    const screen = result || secondValue || firstValue;
    return <DisplayInput>{screen}</DisplayInput>;
  }
}

function mapStateToProps(state) {
  return state.calculator;
}

export default connect(mapStateToProps)(DisplayCC);
