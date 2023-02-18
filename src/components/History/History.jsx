import React from 'react';
import { HistoryItem, HistoryList, HistoryWrapper } from './styled';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const History = ({ isOpenedHistory }) => {
  const { history } = useSelector(state => state.calculator);
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
};

History.propTypes = {
  isOpenedHistory: PropTypes.bool,
};
