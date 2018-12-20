import React from 'react';
import isEqual from 'lodash/isEqual';
import shuffle from 'lodash/shuffle';
import { Transition, animated } from 'react-spring';
import { updateIdForList } from './helpers';
import './style.scss';

class ArrayModel extends React.Component {
  static defaultProps = {
    value: [1, 2, 3, 4, 5]
  };

  state = {
    value: updateIdForList(this.props.value.map(value => ({ value })))
  };

  componentDidUpdate({ value: prevValue }) {
    const { value } = this.props;
    if (!isEqual(value, prevValue)) {
      this.setState({ value: updateIdForList(this.props.value.map(value => ({ value }))) });
    }
  }

  componentDidMount() {
    let i = 0;
    setInterval(() => {
      this.setState({ value: i++ % 2 ? [this.state.value[4], ...this.state.value.slice(0, 4)] : this.state.value });
    }, 1000);
  }

  render() {
    const { value } = this.state;

    let displayData = value.map((child, i) => {
      return { y: i * 30, x: i > 10 ? 20 : 0, height: child.value * 20, key: child.id };
    });
    return (
      <div className="model_array_container">
        <Transition
          native
          items={displayData}
          keys={d => d.key}
          initial={null}
          from={{ height: 0, opacity: 0, scale: 1 }}
          leave={{ height: 0, opacity: 0 }}
          enter={({ y, height }) => ({ y, height, opacity: 1 })}
          update={({ y, height }) => ({ y, height, scale: 1 })}
          config={{ mass: 4, tension: 100, friction: 40 }}
          trail={100}>
          {(el, _, i) => ({ opacity, y, x, height }) => (
            <animated.div
              className="model_array_item"
              style={{
                opacity,
                height,
                marginTop: `10px`,
                transform: y.interpolate(y => `translate3d(${y}px,0,0)`)
              }}
            >
              {i}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

export default ArrayModel;
