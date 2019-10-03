import React from 'react';
import { Slider } from 'antd';
import '../styles/level.css';
import PropTypes from 'prop-types';

const Level = (props) => {
  const {
    getLevelInfo,
    levelSelected
  } = props;
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
      <Slider
        marks={marks}
        value={levelSelected || 0}
        onChange={getLevelInfo}
        max={5}
        defaultValue={0}
      />
    </div>
  );
};

Level.propTypes = {
  getLevelInfo: PropTypes.func.isRequired,
  levelSelected: PropTypes.number
};

export default Level;
