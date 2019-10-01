import React from 'react';
import { Slider } from 'antd';

const Level = () => {
  const marks = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: {
      style: {
        color: '#f50',
      },
      max: 5,
	  dots: true
    },
  };
  return (
    <div>
      <Slider marks={marks} defaultValue={0} />
    </div>
  );
};

export default Level; 