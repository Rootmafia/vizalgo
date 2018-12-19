import React from 'react';

import './style.scss';

class ArrayModel extends React.Component {

  state = {
    value: [1, 3, 4, 5, 2]
  };

  componentDidMount() {

  }

  render() {
    const { value } = this.state;
    return (
      <div className="model_array_container">
        {
          value.map((e, i) => (
            <div className="model_array_item"
                 style={{ height: `${e * 40}px` }}>
              {e}
            </div>
          ))
        }
      </div>
    );
  }
}

export default ArrayModel;
