import React from 'react';


const LevelInfo = (props) => {
  const { milstone } = props;
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
  );
};


export default LevelInfo; 