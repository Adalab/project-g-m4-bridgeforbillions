import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import Level from './Level';
import LevelInfo from './LevelInfo';
import './../styles/description.css';


const Description = (props) => {
  const { attributeObject, getLevelInfo, defaultObject } = props;
  const { Title } = Typography;

  return (
    <div className="description__container">
      {attributeObject ? (
        <div className="description__info">
          <Title level={3} className={`description__subtitle--${attributeObject.category}`} type="primary">2: Rank (TBD)</Title>
          <Title level={2} className={`description__title--${attributeObject.category}`} type="primary">{attributeObject.displayName}</Title>
          <p className={`description__text--${attributeObject.category}`}>{attributeObject.description}</p>
          <div className="description__level__container">
            <Level getLevelInfo={getLevelInfo} levelSelected={attributeObject.currentLevel} />
            <div className="levelInfo">
              {attributeObject.milestones
                .filter((milstone) => milstone.level.includes(attributeObject.currentLevel))
                .map((milestone) => {
                  return (
                    <LevelInfo milestone={milestone} attributeObject={attributeObject} />
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Title level={3} className={`description__subtitle--${defaultObject.category}`} type="primary">2: Rank (TBD)</Title>
          <Title level={2} className={`description__title--${defaultObject.category}`} type="primary">{defaultObject.displayName}</Title>
          <p className="description__text">{defaultObject.description}</p>
          <div className="description__level__container">
            <Level getLevelInfo={getLevelInfo} levelSelected={defaultObject.currentLevel} />
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
