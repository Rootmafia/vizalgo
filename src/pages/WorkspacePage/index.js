import React from 'react';
import Editor from './components/Editor';

import './style.scss';
import Action from './components/Action';

class WorkspacePage extends React.Component {
  state = { value: '', status: 'stopped' };

  static Statuses = {
    RUN: 'running',
    STOP: 'stopped',
    COMPLETED: 'completed'
  };

  runCode = (value) => {
    this.setState({ value, status: WorkspacePage.Statuses.RUN });
  };

  stopCode = () => {
    this.setState({ value: '', status: WorkspacePage.Statuses.STOP });
  };

  getIsActive = () => {
    return this.state.status !== WorkspacePage.Statuses.STOP;
  };

  render() {
    const { value } = this.state;
    const isActive = this.getIsActive();
    return (
      <div className="workspace">
        <div className="workspace_editor">
          <Editor
            runCode={this.runCode}
            stopCode={this.stopCode}
            active={isActive}/>
        </div>
        <code className="workspace_vizualization">
          <Action active={isActive} value={value}/>
        </code>
      </div>
    );
  }
}

export default WorkspacePage;
