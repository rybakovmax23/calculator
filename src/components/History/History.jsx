import React from 'react';
import { HistoryItem, HistoryList, HistoryWrapper } from './styled';
import { v4 as uuidV4 } from 'uuid';

const mockHistory = [
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
  '1+1',
];

export const History = ({ isOpenedHistory }) => {
  return (
    isOpenedHistory && (
      <HistoryWrapper>
        <HistoryList>
          {mockHistory.map(el => (
            <HistoryItem key={uuidV4()}>{el}</HistoryItem>
          ))}
        </HistoryList>
      </HistoryWrapper>
    )
  );
};
