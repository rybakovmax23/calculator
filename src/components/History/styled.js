import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  padding: 10px 0px;
  min-width: 200px;
`;

export const HistoryTitle = styled.div`
  font-size: 22px;
  line-height: 28px;
  text-align: center;
`;

export const HistoryList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 525px;
  border-left: 2px solid #707070;
`;

export const HistoryItem = styled.div`
  font-size: 20px;
  line-height: 26px;
`;
