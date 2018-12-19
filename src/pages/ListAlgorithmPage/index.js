import React from 'react';
import { algorithms } from '../../data';
import AlgorithmCard from './components/AlgorithmCard';
import AlgorithmHeader from './components/AlgoritmhHeader';

import './style.scss';


const ListAlgorithmPage = ({ data = algorithms }) => {
  return (
    <div className="alg_page">
      <AlgorithmHeader/>
      <div className="alg_body">
        {data.map((value, i) => (
          <AlgorithmCard
            value={value}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ListAlgorithmPage;
