import React from 'react';
import Level from './Level'; 

const Description = (props) => {
  const { careerInfo } = props;
  
  return (
    <div>
      {careerInfo.map(info => {
        return (
          <div>
            <div>
              <p>{info.displayName}</p>
              <p>{info.description}</p>
            </div>
            <Level />
            <div>
              {info.milestones.map((milstone) => {
                return (
                  <div>
                    <p>{milstone.summary}</p>
                    <p>Examples behaviors</p>
                    <ul>
                      {milstone.signals.map((signal, index) => {
                        return (
                          <li key={index}>{signal}</li>
                        );
                      })}
                    </ul>
                    <p>Examples Tasks</p>
                    <ul>
                      {milstone.examples.map((example, index) => {
                        return (
                          <li key={index}>{example}</li>
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