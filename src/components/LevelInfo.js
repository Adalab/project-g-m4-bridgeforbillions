import React from 'react';
import PropTypes from 'prop-types';
import './../styles/levelInfo.css';
import { Typography } from 'antd';


const LevelInfo = (props) => {
  const { milestone, attributeObject } = props;
  const { Title } = Typography;

  return (
    <div>
      <div className={`levelInfo__number--${attributeObject.category}`}>{attributeObject.currentLevel}</div>
      <p className="levelInfo__summary">{milestone.summary}</p>
      <Title level={4} className="levelInfo__behaviors title__h4">Examples behaviors</Title>
      <ul className="levelInfo__behavior-list">
        {milestone.signals.map((signal, index) => {
          return (
            <li className="levelInfo__behavior-item" key={index}>{signal}</li>
          );
        })}
      </ul>
      <Title level={4} className="levelInfo__taskst title__h4">Examples Tasks</Title>
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
