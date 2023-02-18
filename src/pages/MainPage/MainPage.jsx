import { Calculator } from 'Components/Calculator/Calculator';
import { History } from 'Components/History/History';
import { ControlPanel } from 'Components/СontrolPanel/ControlPanel';
import React, { useCallback, useState } from 'react';
import { MainWrapper } from './styled';

export const MainPage = () => {
  const [isOpenedHistory, setOpenHistory] = useState(false);

  const handlerOpeningHistory = useCallback(() => {
    setOpenHistory(!isOpenedHistory);
  }, [isOpenedHistory]);

  return (
    <React.Fragment>
      <ControlPanel
        isOpenedHistory={isOpenedHistory}
        handlerOpeningHistory={handlerOpeningHistory}
      />
      <MainWrapper>
        <Calculator />
        <History isOpenedHistory={isOpenedHistory} />
      </MainWrapper>
    </React.Fragment>
  );
};
