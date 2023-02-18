import React from 'react';
import { HistoryItem, HistoryList, HistoryWrapper } from './styled';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HistoryCC extends React.Component {
  render() {
    const { isOpenedHistory, history } = this.props;
    return (
      isOpenedHistory && (
        <HistoryWrapper>
          <HistoryList>
            {history.map(el => (
              <HistoryItem key={uuidV4()}>{el}</HistoryItem>
            ))}
          </HistoryList>
        </HistoryWrapper>
      )
    );
  }
}

function mapStateToProps(state) {
  return state.calculator;
}

HistoryCC.propTypes = {
  isOpenedHistory: PropTypes.bool,
};

export default connect(mapStateToProps)(HistoryCC);
