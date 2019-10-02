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
    5: 5
  };

  return (
    <div>
      <Slider marks={marks} value={levelSelected|| 0} onChange={getLevelInfo} max={5} defaultValue={0}/>
    </div>
  );
};

export default Level; 