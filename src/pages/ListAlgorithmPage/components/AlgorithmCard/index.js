import React from 'react';
import { Card, Tag, Badge } from 'antd';
import { Link } from 'react-router-dom';

const AlgorithmCard = ({ value }) => {
  return (
    <Card
      className="alg_card"
      title={value.name}
      extra={
        <Link to="/workspace">
          Work
        </Link>
      }
      cover={<img className="alg_card_image" alt="example" src={value.image}/>}
      actionsClassName="asd"
      actions={[
        <div>
          {
            (value.tags || []).map((tag, i) => (
              <Tag color={tag.color}>{tag.text}</Tag>
            ))
          }
        </div>
      ]}
    />
  );
};

export default AlgorithmCard;
