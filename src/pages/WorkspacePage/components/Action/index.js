import React from 'react';
import { execute } from './execute/execute';
import ArrayModel from './ArrayModel';

class Action extends React.Component {

  componentDidUpdate({ active: prevActive }) {
    const { active } = this.props;
    if (prevActive !== active && active) {
      this.vizualize();
    }
  }

  vizualize = () => {
    execute(this.props.value);
  };

  render() {
    const { active, value } = this.props;
    return (
      <code className="workspace_vizualization">
        <div>{active ? 'Running ....' : 'Vizualization'}<br/></div>
        <ArrayModel/>
      </code>
    );
  }
}

export default Action;
