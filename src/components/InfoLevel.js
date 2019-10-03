import React from 'react';
import { Typography } from 'antd';
import '../styles/infoLevel.scss';
import PropTypes from 'prop-types';


const InfoLevel = (props) => {
  const {
    milestone,
    attributeObject
  } = props;
  const { Title } = Typography;

  return (
    <>
      <div className="levelInfo__number__container">
        <div className={`levelInfo__number--${attributeObject.category}`}>{attributeObject.currentLevel}</div>
        <div className="levelInfo__text">
          <p className="levelInfo__summary">{milestone.summary}</p>
          <Title level={4} className="levelInfo__behaviors title__h4">Examples behaviors</Title>
          <ul className="levelInfo__behavior-list">
            {milestone.signals.map((signal) => {
              return (
                <li className="levelInfo__behavior-item" key={signal}>{signal}</li>
              );
            })}
          </ul>
          <Title level={4} className="levelInfo__taskst title__h4">Examples Tasks</Title>
          <ul className="levelInfo__task-list">
            {milestone.examples.map((example) => {
              return (
                <li className="levelInfo__task-item" key={example}>{example}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

InfoLevel.propTypes = {
  milestone: PropTypes.object.isRequired,
  attributeObject: PropTypes.object.isRequired
};

export default InfoLevel;
