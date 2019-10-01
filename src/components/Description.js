import React from 'react';
import { Slider } from 'antd';

const Description = (props) => {
  const { careerInfo } = props;
  const marks = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: {
      style: {
        color: '#f50',
      },
      max: 5,
      dots: true
    },
  };
  return (
    <div>
      {careerInfo.map(info => {
        return (
          <div>
            <div>
              <p>{info.displayName}</p>
              <p>{info.description}</p>
            </div>
            <div>
              <Slider marks={marks} defaultValue={0} />
              <Slider range marks={marks} defaultValue={[0, 5]} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Description;