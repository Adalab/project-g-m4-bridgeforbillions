import React from 'react';
import PropTypes from 'prop-types';
import './../styles/levelInfo.css';


const LevelInfo = (props) => {
  const { milestone, attributeObject } = props;

  return (
    <div>
      <div className={`levelInfo__number--${attributeObject.category}`}>{attributeObject.currentLevel}</div>
      <p className="levelInfo__summary">{milestone.summary}</p>
      <h4 className="levelInfo__behaviors">Examples behaviors</h4>
      <ul className="levelInfo__behavior-list">
        {milestone.signals.map((signal, index) => {
          return (
            <li className="levelInfo__behavior-item" key={index}>{signal}</li>
          );
        })}
      </ul>
      <h4 className="levelInfo__tasks">Examples Tasks</h4>
      <ul className="levelInfo__task-list">
        {milestone.examples.map((example, index) => {
          return (
            <li className="levelInfo__task-item" key={index}>{example}</li>
          );
        })}
      </ul>
    </div>
  );
};

LevelInfo.propTypes = {
  milestone: PropTypes.object.isRequired,
  attributeObject: PropTypes.object.isRequired
};

export default LevelInfo;
