import React from 'react';
import { DisplayInput } from './styled';
import PropTypes from 'prop-types';

export const Display = ({ value }) => {
  return <DisplayInput>{value}</DisplayInput>;
};

Display.propTypes = {
  value: PropTypes.string,
};
