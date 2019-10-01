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
      {careerInfo.map(info => {
        return (
          <div>
            <div>
              <p>{info.displayName}</p>
              <p>{info.description}</p>
            </div>
            <div>
              {info.milestones.map((milstone) => {
                return (
                  <div>
                    <p>{milstone.summary}</p>
                    <ul>
                      {milstone.signals.map((signal) => {
                        return (
                          <li>{signal}</li>
                        );
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Description;