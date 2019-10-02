import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';
import LevelInfo from './LevelInfo';
import './../styles/description.css';


const Description = (props) => {
  const { attributeObject, getLevelInfo, defaultObject } = props;

  return (
    <div className="description__container">
      {attributeObject ? (
        <div className="description__info">
          <h3 className="description__subtitle">2: Rank (TBD)</h3>
          <h2 className={`description__title--${attributeObject.category}`}>{attributeObject.displayName}</h2>
          <p className={`description__text--${attributeObject.category}`}>{attributeObject.description}</p>
          <div className={`description__level__container description__level__container--${attributeObject.category}`}>
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
          <h3 className={`description__subtitle--${defaultObject.category}`}>2: Rank (TBD)</h3>
          <h2 className={`description__title--${defaultObject.category}`}>{defaultObject.displayName}</h2>
          <p className={`description__text--${defaultObject.category}`}>{defaultObject.description}</p>
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
