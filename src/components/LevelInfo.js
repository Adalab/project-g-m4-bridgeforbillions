import React from 'react';


const LevelInfo = (props) => {
  const { milestones } = props;
  return (
    <div>
      {milestones.map(milestone => {
        return (
          <>
            <p>{milestone.summary}</p>
            <p>Examples behaviors</p>
            <ul>
              {milestone.signals.map((signal, index) => {
                return (
                  <li key={index}>{signal}</li>
                );
              })}
            </ul>
            <p>Examples Tasks</p>
            <ul>
              {milestone.examples.map((example, index) => {
                return (
                  <li key={index}>{example}</li>
                );
              })}
            </ul>
          </>
        )

      })};

    </div>
  );
};


export default LevelInfo; 