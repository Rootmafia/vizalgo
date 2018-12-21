import React from 'react';
import { execute } from './execute/execute';
import ArrayModel from './ArrayModel';

class Action extends React.Component {

  state = {
    activeElement: null,
    value: []
  };

  componentDidUpdate({ active: prevActive }) {
    const { active } = this.props;
    if (prevActive !== active && active) {
      this.vizualize();
    }
  }

  setActive = (activeElement) => {
    this.setState({ activeElement });
  };

  setValue = (value) => {
    this.setState({ value });
  };

  vizualize = () => {
    execute(this.props.value, {
      setActive: this.setActive,
      setValue: this.setValue,
    });
  };

  render() {
    const { active: isRunning } = this.props;

    const { activeElement, value } = this.state;
    return (
      <code className="workspace_vizualization">
        <div>{isRunning ? 'Running ....' : 'Vizualization'}<br/></div>
        {
          isRunning && (
            <ArrayModel
              value={value}
              activeElement={activeElement}
            />
          )
        }
      </code>
    );
  }
}

export default Action;
