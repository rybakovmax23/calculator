import React from 'react';
import PropTypes from 'prop-types';
import { ControlPanelWrapper } from './styled';

export const ControlPanel = ({ isOpenedHistory, handlerOpeningHistory }) => {
  return (
    <ControlPanelWrapper onClick={handlerOpeningHistory} data-cy='controlPanel'>
      History {isOpenedHistory ? '▲' : '▼'}
    </ControlPanelWrapper>
  );
};

ControlPanel.propTypes = {
  isOpenedHistory: PropTypes.bool,
  handlerOpeningHistory: PropTypes.func,
};
