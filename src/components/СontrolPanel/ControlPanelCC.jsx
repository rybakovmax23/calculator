import React from 'react';
import PropTypes from 'prop-types';
import { ControlPanelWrapper } from './styled';

export class ControlPanelCC extends React.Component {
  render() {
    const { handlerOpeningHistory, isOpenedHistory } = this.props;
    return (
      <ControlPanelWrapper onClick={handlerOpeningHistory}>
        History {isOpenedHistory ? '▲' : '▼'}
      </ControlPanelWrapper>
    );
  }
}

ControlPanelCC.propTypes = {
  isOpenedHistory: PropTypes.bool,
  handlerOpeningHistory: PropTypes.func,
};
