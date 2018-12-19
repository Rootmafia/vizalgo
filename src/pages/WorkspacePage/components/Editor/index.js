import React from 'react';
import { Button } from 'antd';
import MonacoEditor from 'react-monaco-editor';

import './style.scss';

export default class Editor extends React.Component {

  editor = React.createRef();

  static defaultProps = {
    initialCode: '// type your code... \n\n',
    options: {
      selectOnLineNumbers: true
    }
  };

  run = () => {
    const value = this.editor.current.editor.getValue();
    const { runCode } = this.props;
    runCode(value);
  };

  stop = () => {
    const { stopCode } = this.props;
    stopCode();
  };

  render() {
    const { options, initialCode, active } = this.props;

    return (
      <>
        <div className="editor_controls">
          {
            active
              ? (
                <Button
                  type="danger"
                  icon="stop"
                  onClick={this.stop}>
                  Stop
                </Button>
              )
              : (
                <Button
                  type="primary"
                  icon="caret-right"
                  onClick={this.run}>
                  Run
                </Button>
              )
          }
        </div>
        <MonacoEditor
          ref={this.editor}
          language="javascript"
          theme="vs-dark"
          value={initialCode}
          options={options}
          automaticLayout
        />
      </>
    );
  }
}
