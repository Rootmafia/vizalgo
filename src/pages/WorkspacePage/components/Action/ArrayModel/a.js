import React from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    keys: PropTypes.func,
    heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number])
  };
  static defaultProps = { heights: 400 };


  }
}
