import React from 'react';
import { Typography } from 'antd';
import '../styles/description.css';
import PropTypes from 'prop-types';
import Level from './Level';
import InfoLevel from './InfoLevel';

const Description = (props) => {
  const {
    attributeObject,
    getLevelInfo,
    defaultObject
  } = props;
  const { Title } = Typography;

  return (
    <div className="description__container">
      {attributeObject ? (
        <div className="description__info">
          <Title className="description__subtitle" level={3}>2: Rank the area (5 levels of expertise)</Title>
          <Title className={`description__title--${attributeObject.category}`} level={2}>{attributeObject.displayName}</Title>
          <p className={`description__text--${attributeObject.category}`}>{attributeObject.description}</p>
          <div className={`description__level__container description__level__container--${attributeObject.category}`}>
            <Level className={`level__slider--${attributeObject.category}}`} getLevelInfo={getLevelInfo} levelSelected={attributeObject.currentLevel} />
            <div className="levelInfo">
              {attributeObject.milestones
                .filter((milstone) => milstone.level.includes(attributeObject.currentLevel))
                .map((milestone) => {
                  return (
                    <InfoLevel milestone={milestone} attributeObject={attributeObject} />
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Title className="description__subtitle" level={3}>2: Rank the area (5 levels of expertise)</Title>
          <Title className={`description__title--${defaultObject.category}`} level={2}>{defaultObject.displayName}</Title>
          <p className={`description__text--${defaultObject.category}`}>{defaultObject.description}</p>
          <div className="description__level__container">
            <Level getLevelInfo={getLevelInfo} className={`level__slider--${defaultObject.category}}`} levelSelected={defaultObject.currentLevel} />
          </div>
        </div>
      )}
    </div>
  );
};

Description.propTypes = {
  attributeObject: PropTypes.object,
  getLevelInfo: PropTypes.func.isRequired,
  defaultObject: PropTypes.object.isRequired
};

export default Description;
