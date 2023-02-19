import React from 'react';
import { ErrorMessage } from './styled';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage>Something went wrong!!</ErrorMessage>;
    }

    return this.props.children;
  }
}
