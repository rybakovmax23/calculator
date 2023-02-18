import { CalculatorCC } from 'Components/Calculator/CalculatorCC';
import HistoryCC from 'Components/History/HistoryCC';
import { ControlPanelCC } from 'Components/СontrolPanel/ControlPanelCC';
import React from 'react';
import { MainWrapper } from './styled';

export class MainPageCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpenedHistory: false };
  }

  handlerOpeningHistory = () => {
    this.setState({ isOpenedHistory: !this.state.isOpenedHistory });
  };
  render() {
    return (
      <React.Fragment>
        <ControlPanelCC
          isOpenedHistory={this.state.isOpenedHistory}
          handlerOpeningHistory={this.handlerOpeningHistory}
        />
        <MainWrapper>
          <CalculatorCC />
          <HistoryCC isOpenedHistory={this.state.isOpenedHistory} />
        </MainWrapper>
      </React.Fragment>
    );
  }
}
