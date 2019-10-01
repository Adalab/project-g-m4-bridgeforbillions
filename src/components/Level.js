import React from 'react';
import { Slider } from 'antd';

const Level = (props) => {
  const { getLevelInfo, levelSelected } = props;
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
      <Slider marks={marks} value={levelSelected} onChange={getLevelInfo} />
    </div>
  );
};

export default Level; 