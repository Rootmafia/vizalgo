import React from 'react';
import isEqual from 'lodash/isEqual';
import { Transition, animated } from 'react-spring';
import './style.scss';
import { ANIMATION_TIME } from '../constants';

class ArrayModel extends React.Component {
  static defaultProps = {
    value: []
  };

  state = {
    value: this.props.value
  };

  componentDidUpdate({ value: prevValue }) {
    const { value } = this.props;
    if (!isEqual(value, prevValue)) {
      this.setState({ value: this.props.value });
    }
  }

  componentDidMount() {
//    let i = 0;
//    setInterval(() => {
//      this.setState({ value: i++ % 2 ? [this.state.value[4], ...this.state.value.slice(0, 4)] : this.state.value });
//    }, 1000);
  }

  _isActive = (key) => {
    const { activeElement } = this.props;
    if (!activeElement) {
      return false;
    }

    console.log(activeElement, key, activeElement.length ? activeElement.includes(key) : activeElement === key);

    return activeElement.length ? activeElement.includes(key) : activeElement === key;
  };

  enter = ({ y, height, key }) => {
    const active = this._isActive(key);
    return ({
      y,
      height,
      opacity: 1,
      marginTop: active ? 10 : 0,
      background: active ? `rgb(109, 213, 237)` : `rgb(42, 147, 175)`,
    });
  };

  render() {
    const { value, activeElement } = this.props;

    let displayData = value.map((child, i) => {
      return { y: i * 30, x: i > 10 ? 20 : 0, height: child.value * 20, key: child.id };
    });
    return (
      <div className="model_array_container">
        <Transition
          native
          items={displayData}
          keys={d => d.height}
          initial={null}
          from={{ height: 0, opacity: 0, scale: 1, marginTop: 0, background: `rgb(42, 147, 175)` }}
          leave={{ height: 0, opacity: 0 }}
          enter={this.enter}
          update={this.enter}
          config={{ mass: 4, tension: 200000 / ANIMATION_TIME, friction: 40000 / ANIMATION_TIME }}
          trail={ANIMATION_TIME / 100}>
          {(el, _, i) => ({ opacity, y, x, height, marginTop, background }) => (
            <animated.div
              className="model_array_item"
              style={{
                opacity,
                height,
                background,
                marginTop: marginTop.interpolate(x => `-${x}px`),
                transform: y.interpolate(y => `translate3d(${y}px,0,0)`)
              }}
            >
              {el.value}
            </animated.div>
          )}
        </Transition>
      </div>
    );

  }
}

export default ArrayModel;
