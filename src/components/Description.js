import React from 'react';
import Level from './Level'; 
import LevelInfo from './LevelInfo'; 

const Description = (props) => {
  const { careerInfo } = props;
  
  return (
    <div>
      {careerInfo.map((info) => {
        return (
          <div>
            <div>
              <div>
                <p>{info.displayName}</p>
                <p>{info.description}</p>
              </div>
              <Level />
            </div>
            <div>
              {info.milestones.map((milstone) => {
                return (
                  <LevelInfo milstone={milstone}/>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Description;